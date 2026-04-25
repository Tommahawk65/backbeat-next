import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";

export const brand = {
  cream: "#f6f2ec",
  creamDark: "#ece5d8",
  ink: "#141416",
  zinc900: "#18181b",
  zinc700: "#3f3f46",
  zinc600: "#52525b",
  zinc500: "#71717a",
  zinc400: "#a1a1aa",
  zinc300: "#d4d4d8",
  zinc200: "#e4e4e7",
  accent: "#b8884a",
  accentDark: "#89683f",
  white: "#ffffff",
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.backbeat-band.co.uk";
const ASSETS_URL = process.env.EMAIL_ASSETS_URL ?? SITE_URL;

export function Layout({
  preview,
  children,
}: {
  preview: string;
  children: ReactNode;
}) {
  return (
    <Html lang="en">
      <Head>
        <style>
          {`@media only screen and (max-width: 600px) {
            .email-body-section { padding: 28px 14px 32px !important; }
            .email-card-row { padding: 14px 12px !important; }
          }`}
        </style>
      </Head>
      <Preview>{preview}</Preview>
      <Body
        style={{
          margin: 0,
          backgroundColor: brand.creamDark,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          color: brand.ink,
        }}
      >
        <Container
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            padding: "16px 8px",
          }}
        >
          <Section
            style={{
              backgroundColor: brand.ink,
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              padding: "28px 32px 24px",
              textAlign: "center" as const,
            }}
          >
            <Link
              href={SITE_URL}
              style={{
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              <Img
                src={`${ASSETS_URL}/images/logo-light.png`}
                alt="Backbeat"
                width="140"
                height="86"
                style={{
                  display: "block",
                  border: 0,
                  margin: "0 auto",
                }}
              />
            </Link>
            <div
              style={{
                width: "32px",
                height: "2px",
                backgroundColor: brand.accent,
                margin: "12px auto 0",
              }}
            />
            <Text
              style={{
                margin: "10px 0 0",
                fontSize: "10px",
                fontWeight: 500,
                color: brand.zinc400,
                textTransform: "uppercase" as const,
                letterSpacing: "0.24em",
              }}
            >
              Live Wedding &amp; Party Band
            </Text>
          </Section>

          <Section
            className="email-body-section"
            style={{
              backgroundColor: brand.white,
              padding: "28px 28px 32px",
            }}
          >
            {children}
          </Section>

          <Section
            style={{
              backgroundColor: brand.cream,
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              padding: "22px 32px 24px",
              textAlign: "center" as const,
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: "12px",
                color: brand.zinc600,
              }}
            >
              <Link
                href={SITE_URL}
                style={{ color: brand.zinc600, textDecoration: "none" }}
              >
                backbeat-band.co.uk
              </Link>
            </Text>
            <Text
              style={{
                margin: "8px 0 0",
                fontSize: "10px",
                color: brand.zinc500,
                textTransform: "uppercase" as const,
                letterSpacing: "0.22em",
              }}
            >
              Managed by Impact Entertainment
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
