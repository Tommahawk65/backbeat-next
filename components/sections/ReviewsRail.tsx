"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

export type Review = {
  body: string;
  name: string;
  event?: string;
};

// Tuning knobs — change here, no magic numbers inside the loop.
const AUTO_SPEED = 0.03; // px/ms  ≈ 30 px/s, slow drift
const MOMENTUM_DECAY = 0.94; // per ~16 ms frame
const VELOCITY_MIN = 0.03; // px/ms threshold where momentum ends
const MOVE_STALE_MS = 120; // drag held still this long → don't fling on release
const INTERACT_COOLDOWN_MS = 2000; // pause auto-drift after any interaction

export function ReviewsRail({ reviews }: { reviews: Review[] }) {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;

    // `virtual` is the float-precision source of truth for scroll position.
    // `el.scrollLeft` is integer-rounded by the browser, so sub-pixel auto
    // drift would never accumulate if we read it back each frame.
    const state = {
      isDown: false,
      hovered: false,
      lastX: 0,
      lastT: 0,
      velocity: 0,
      cooldownUntil: 0,
      virtual: el.scrollLeft,
      needsResync: false,
    };

    // Seamless infinite loop: content is rendered twice, so any position in
    // [0, half) looks identical to the same position in [half, scrollWidth).
    const wrap = (target: number): number => {
      const half = el.scrollWidth / 2;
      if (half <= 0) return Math.max(0, target);
      return ((target % half) + half) % half;
    };

    const commit = () => {
      state.virtual = wrap(state.virtual);
      el.scrollLeft = state.virtual;
    };

    let rafId = 0;
    let prevT = 0;

    const tick = (now: number) => {
      if (!prevT) prevT = now;
      const dt = Math.min(now - prevT, 64); // clamp after tab-switch
      prevT = now;

      if (state.isDown) {
        // onPointerMove is driving scrollLeft + virtual directly.
      } else if (Math.abs(state.velocity) > VELOCITY_MIN) {
        state.virtual += state.velocity * dt;
        state.velocity *= Math.pow(MOMENTUM_DECAY, dt / 16);
        commit();
      } else {
        state.velocity = 0;
        const paused = state.hovered || now < state.cooldownUntil;
        if (!paused) {
          if (state.needsResync) {
            state.virtual = el.scrollLeft;
            state.needsResync = false;
          }
          state.virtual += AUTO_SPEED * dt;
          commit();
        }
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const markInteraction = () => {
      state.cooldownUntil = performance.now() + INTERACT_COOLDOWN_MS;
      state.needsResync = true;
    };

    const onPointerEnter = (e: PointerEvent) => {
      if (e.pointerType === "mouse") state.hovered = true;
    };
    const onPointerLeave = (e: PointerEvent) => {
      if (e.pointerType === "mouse") state.hovered = false;
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      state.isDown = true;
      state.lastX = e.clientX;
      state.lastT = performance.now();
      state.velocity = 0;
      state.virtual = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.dataset.dragging = "true";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!state.isDown) return;
      const now = performance.now();
      const dt = Math.max(1, now - state.lastT);
      const dx = e.clientX - state.lastX;

      state.virtual -= dx;
      commit();

      // Smooth velocity with an exponential moving average so a jittery mouse
      // doesn't throw off the release fling.
      const instant = -dx / dt;
      state.velocity = state.velocity * 0.6 + instant * 0.4;

      state.lastX = e.clientX;
      state.lastT = now;
    };

    const onPointerUp = (e: PointerEvent) => {
      if (!state.isDown) return;
      state.isDown = false;
      el.releasePointerCapture(e.pointerId);
      delete el.dataset.dragging;
      if (performance.now() - state.lastT > MOVE_STALE_MS) {
        state.velocity = 0;
      }
    };

    const onClickCapture = (e: MouseEvent) => {
      if (Math.abs(state.velocity) > 0.1) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    el.addEventListener("pointerenter", onPointerEnter);
    el.addEventListener("pointerleave", onPointerLeave);
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("click", onClickCapture, true);
    el.addEventListener("wheel", markInteraction, { passive: true });
    el.addEventListener("touchstart", markInteraction, { passive: true });
    el.addEventListener("touchmove", markInteraction, { passive: true });
    el.addEventListener("pointerdown", markInteraction);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("pointerenter", onPointerEnter);
      el.removeEventListener("pointerleave", onPointerLeave);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("click", onClickCapture, true);
      el.removeEventListener("wheel", markInteraction);
      el.removeEventListener("touchstart", markInteraction);
      el.removeEventListener("touchmove", markInteraction);
      el.removeEventListener("pointerdown", markInteraction);
    };
  }, []);

  // Render the list twice so wrap() has a silent boundary to hop across.
  const loop = [...reviews, ...reviews];

  return (
    <div
      ref={railRef}
      className="flex cursor-grab gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] data-[dragging=true]:cursor-grabbing data-[dragging=true]:select-none [&::-webkit-scrollbar]:hidden"
    >
      {loop.map((r, i) => (
        <figure
          key={`${r.name}-${i}`}
          className="flex w-[85vw] shrink-0 flex-col rounded-sm bg-white/[0.04] p-8 ring-1 ring-white/10 sm:w-[360px]"
        >
          <div className="flex gap-0.5 text-accent" aria-label="5 out of 5">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <blockquote className="mt-5 flex-1 text-base leading-relaxed text-white/80">
            &ldquo;{r.body}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex flex-col">
            <span className="text-sm font-semibold text-white">{r.name}</span>
            {r.event && (
              <span className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">
                {r.event}
              </span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
