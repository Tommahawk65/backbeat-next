import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy & Cookies",
  description:
    "How Backbeat Wedding Band collects, uses and protects your personal information, including details of cookies used on this site.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "24 April 2026";

export default function PrivacyPage() {
  return (
    <main className="bg-cream py-16 text-zinc-800 sm:py-24">
      <article className="mx-auto max-w-3xl px-6">
        <header className="mb-12">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl">
            Privacy &amp; cookies
          </h1>
          <p className="mt-6 text-base leading-relaxed text-zinc-600">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="space-y-10 text-base leading-relaxed">
          <Section title="1. Who we are">
            <p>
              This site is operated by <strong>Backbeat Wedding Band</strong>{" "}
              (&ldquo;Backbeat&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;),
              based in Hampshire, United Kingdom. Day-to-day booking
              administration is handled on our behalf by Impact Entertainment.
            </p>
            <p>
              For any privacy-related request, contact us at{" "}
              <a
                href="mailto:info@impact-entertainment.co.uk"
                className="font-medium text-accent-dark underline"
              >
                info@impact-entertainment.co.uk
              </a>
              .
            </p>
          </Section>

          <Section title="2. Information we collect">
            <p>When you use this site we may collect the following:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Enquiry form data</strong> — your name, email address,
                event date, venue or town, and any message you choose to
                include.
              </li>
              <li>
                <strong>Advertising click identifiers</strong> — where you
                arrive via a Google or Meta advert, we capture the{" "}
                <code>gclid</code> / <code>fbclid</code> parameters so we can
                attribute your enquiry to the correct campaign.
              </li>
              <li>
                <strong>Technical data</strong> — your IP address, browser user
                agent and referring page, collected automatically by our
                hosting and security layers and used to protect against abuse
                and to improve event-match quality for advertising (see
                &ldquo;How we use your information&rdquo;).
              </li>
              <li>
                <strong>Cookie and device data</strong> — see{" "}
                <a
                  href="#cookies"
                  className="font-medium text-accent-dark underline"
                >
                  section 6
                </a>
                .
              </li>
            </ul>
          </Section>

          <Section title="3. How we use your information">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                To respond to your enquiry, confirm availability and prepare a
                quote.
              </li>
              <li>
                To send you a confirmation email acknowledging your enquiry.
              </li>
              <li>
                To create a lead record in our booking CRM so we can track and
                follow up on your enquiry.
              </li>
              <li>
                To measure the performance of our advertising campaigns,
                including server-side conversion reporting to Meta (sending a
                hashed version of your email and IP/user-agent) and standard
                conversion reporting to Google.
              </li>
              <li>
                To improve the site, understand how visitors use it, and debug
                issues.
              </li>
            </ul>
          </Section>

          <Section title="4. Legal basis for processing">
            <p>
              Under the UK GDPR we rely on the following legal bases:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Contract / pre-contractual steps</strong> — to respond
                to your enquiry and prepare a quote.
              </li>
              <li>
                <strong>Legitimate interests</strong> — to secure our site, to
                measure advertising effectiveness for campaigns you interacted
                with, and to maintain CRM records of business enquiries. We
                have assessed that these uses do not override your rights and
                freedoms.
              </li>
              <li>
                <strong>Consent</strong> — for all non-essential cookies and
                tracking (analytics and marketing). You can grant or withdraw
                consent at any time via the cookie banner.
              </li>
            </ul>
          </Section>

          <Section title="5. Who we share your information with">
            <p>
              We do not sell your data. We share information only with trusted
              service providers acting on our instructions under a data
              processing agreement, including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Hosting and infrastructure providers</strong> — to run
                the website and keep it secure.
              </li>
              <li>
                <strong>Email delivery providers</strong> — to send you a
                confirmation and notify us of your enquiry.
              </li>
              <li>
                <strong>Booking and CRM providers</strong> — so we can track
                and follow up on your enquiry.
              </li>
              <li>
                <strong>Analytics and advertising providers</strong> (e.g.
                Google, Meta) — to measure site usage and advertising
                performance, only where you have given consent or where we
                rely on legitimate interests for server-side conversion
                reporting (see section 6).
              </li>
            </ul>
            <p className="mt-4 text-sm text-zinc-600">
              Some of these providers are based outside the UK. Where that is
              the case, transfers are made under the UK International Data
              Transfer Agreement, the UK Addendum to the EU Standard
              Contractual Clauses, or another safeguard recognised by UK law.
            </p>
          </Section>

          <Section title="6. Cookies" id="cookies">
            <p>
              Cookies are small files stored on your device. You control
              non-essential cookies through the consent banner that appears on
              your first visit. You can change your choice at any time by
              clicking &ldquo;Manage preferences&rdquo; in the banner.
            </p>
            <div className="mt-4 space-y-6">
              <CookieCategory
                title="Strictly necessary"
                purpose="Required for the site to function — remembering your consent choice, security, and form submission."
                examples="cc_cookie (our consent record)"
                consent="Always on"
              />
              <CookieCategory
                title="Analytics"
                purpose="Help us understand how visitors use the site so we can improve it. Set by Google Analytics 4 via Google Tag Manager."
                examples="_ga, _ga_*"
                consent="Only with your consent"
              />
              <CookieCategory
                title="Marketing"
                purpose="Used to measure ad performance and serve relevant adverts. Set by Meta Pixel and Google Ads."
                examples="_fbp, _fbc, _gcl_au"
                consent="Only with your consent"
              />
            </div>
            <p className="mt-4 text-sm text-zinc-600">
              Where we rely on server-side conversion reporting (e.g. Meta
              Conversions API) after you submit the enquiry form, we process
              only a hashed form of your email alongside technical data (IP,
              user-agent) on the basis of legitimate interest. You may object
              to this use — see &ldquo;Your rights&rdquo; below.
            </p>
          </Section>

          <Section title="7. How long we keep your data">
            <p>
              We only keep personal data for as long as we need it for the
              purposes described above. The criteria we use are:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Enquiry and booking records</strong> — kept for as
                long as we have an active relationship with you, plus a
                reasonable period afterwards to handle follow-up questions or
                disputes. Where you become a client, we keep records for the
                period required by UK tax and accounting law.
              </li>
              <li>
                <strong>Analytics and advertising data</strong> — kept
                according to the standard retention periods set by the
                relevant provider (for example, Google Analytics and Meta),
                which are typically in the region of 12–14 months.
              </li>
              <li>
                <strong>Consent records</strong> — kept for a reasonable
                period so we can demonstrate that valid consent was given.
              </li>
            </ul>
            <p className="mt-4 text-sm text-zinc-600">
              If you would like more detail on retention for a specific
              category of data, please contact us using the details above.
            </p>
          </Section>

          <Section title="8. Your rights">
            <p>Under UK GDPR you have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>access the personal data we hold about you;</li>
              <li>have inaccurate data corrected;</li>
              <li>
                have your data deleted (&ldquo;right to be forgotten&rdquo;),
                subject to our legal retention obligations;
              </li>
              <li>
                restrict or object to our processing, including to
                advertising-related processing;
              </li>
              <li>request a portable copy of your data; and</li>
              <li>
                withdraw consent for cookies or other consent-based processing
                at any time.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email{" "}
              <a
                href="mailto:info@impact-entertainment.co.uk"
                className="font-medium text-accent-dark underline"
              >
                info@impact-entertainment.co.uk
              </a>
              . We will respond within one month.
            </p>
          </Section>

          <Section title="9. Complaints">
            <p>
              If you&rsquo;re unhappy with how we&rsquo;ve handled your data
              you can complain to the UK Information Commissioner&rsquo;s
              Office (ICO) at{" "}
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent-dark underline"
              >
                ico.org.uk/make-a-complaint
              </a>{" "}
              or on 0303 123 1113. We would, however, appreciate the chance
              to address your concerns first.
            </p>
          </Section>

          <Section title="10. Changes to this policy">
            <p>
              We may update this policy from time to time. Material changes
              will be notified via this page and the &ldquo;Last
              updated&rdquo; date above. Please review periodically.
            </p>
          </Section>
        </div>

        <div className="mt-16 border-t border-zinc-200 pt-8 text-sm">
          <Link
            href="/"
            className="font-medium text-accent-dark underline"
          >
            &larr; Back to home
          </Link>
        </div>
      </article>
    </main>
  );
}

function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-zinc-700">{children}</div>
    </section>
  );
}

function CookieCategory({
  title,
  purpose,
  examples,
  consent,
}: {
  title: string;
  purpose: string;
  examples: string;
  consent: string;
}) {
  return (
    <div className="rounded-sm bg-white p-5 ring-1 ring-zinc-200">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
        <span className="text-xs uppercase tracking-widest text-zinc-500">
          {consent}
        </span>
      </div>
      <p className="mt-3 text-sm text-zinc-700">{purpose}</p>
      <p className="mt-2 text-xs text-zinc-500">
        <span className="uppercase tracking-widest">Examples</span>{" "}
        <span className="font-mono">{examples}</span>
      </p>
    </div>
  );
}
