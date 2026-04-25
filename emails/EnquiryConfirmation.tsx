import { Button, Heading, Link, Section, Text } from "@react-email/components";

import { Layout, brand } from "./_components/Layout";

export interface EnquiryConfirmationProps {
  name: string;
  eventDateFormatted: string;
  venue: string;
  message?: string;
  siteUrl?: string;
}

const eyebrow = {
  margin: 0,
  fontSize: "11px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.24em",
  color: brand.accent,
  fontWeight: 600,
};

const label = {
  margin: 0,
  fontSize: "10px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.22em",
  color: brand.zinc500,
  fontWeight: 600,
};

const value = {
  margin: "6px 0 0",
  fontSize: "16px",
  color: brand.ink,
  lineHeight: "1.4",
  fontWeight: 500,
};

export function EnquiryConfirmation({
  name,
  eventDateFormatted,
  venue,
  message,
  siteUrl = "https://www.backbeat-band.co.uk",
}: EnquiryConfirmationProps) {
  const firstName = name.split(" ")[0];

  return (
    <Layout
      preview={`Thanks ${firstName}, we've got your enquiry for ${eventDateFormatted} at ${venue}. We'll check availability and come back with a tailored quote shortly.`}
    >
      <Text style={eyebrow}>Enquiry received</Text>
      <Heading
        as="h1"
        style={{
          margin: "12px 0 0",
          fontSize: "30px",
          lineHeight: "1.15",
          color: brand.ink,
          fontWeight: 600,
          letterSpacing: "-0.02em",
        }}
      >
        Thanks {firstName} — we&apos;ve got it.
      </Heading>

      <Text
        style={{
          margin: "20px 0 0",
          fontSize: "16px",
          lineHeight: "1.65",
          color: brand.zinc700,
        }}
      >
        We&apos;ll check availability for your date and come back with a
        tailored quote shortly.
      </Text>

      <Section
        style={{
          marginTop: "16px",
          padding: "4px 0",
          backgroundColor: brand.cream,
          borderRadius: "10px",
        }}
      >
        <div className="email-card-row" style={{ padding: "16px 22px" }}>
          <Text style={label}>Event date</Text>
          <Text style={value}>{eventDateFormatted}</Text>
        </div>
        <div
          className="email-card-row"
          style={{
            borderTop: `1px solid ${brand.creamDark}`,
            padding: "16px 22px",
          }}
        >
          <Text style={label}>Venue</Text>
          <Text style={value}>{venue}</Text>
        </div>
        {message ? (
          <div
            className="email-card-row"
            style={{
              borderTop: `1px solid ${brand.creamDark}`,
              padding: "16px 22px",
            }}
          >
            <Text style={label}>Your message</Text>
            <Text
              style={{
                ...value,
                whiteSpace: "pre-wrap" as const,
              }}
            >
              {message}
            </Text>
          </div>
        ) : null}
      </Section>

      <Section style={{ marginTop: "36px" }}>
        <Text style={eyebrow}>While you wait</Text>
        <Text
          style={{
            margin: "12px 0 0",
            fontSize: "15px",
            lineHeight: "1.65",
            color: brand.zinc700,
          }}
        >
          Have a browse through our setlist — 60+ indie anthems, rock classics
          and modern chart hits that keep dance floors packed. And for your
          first dance, pick any song you like — we&apos;ll learn it for you at
          no extra cost.
        </Text>
        <div style={{ marginTop: "20px" }}>
          <Button
            href={`${siteUrl}/repertoire`}
            style={{
              backgroundColor: brand.accent,
              color: brand.white,
              padding: "13px 26px",
              borderRadius: "999px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textDecoration: "none",
              textTransform: "uppercase" as const,
            }}
          >
            View the setlist →
          </Button>
        </div>
      </Section>

      <Section
        style={{
          marginTop: "40px",
          paddingTop: "24px",
          borderTop: `1px solid ${brand.zinc200}`,
        }}
      >
        <Text
          style={{
            margin: 0,
            fontSize: "15px",
            lineHeight: "1.65",
            color: brand.zinc700,
          }}
        >
          Any questions in the meantime, just hit reply.
        </Text>
        <Text
          style={{
            margin: "16px 0 0",
            fontSize: "15px",
            color: brand.ink,
            fontWeight: 600,
          }}
        >
          — Backbeat
        </Text>
        <Text
          style={{
            margin: "4px 0 0",
            fontSize: "13px",
            color: brand.zinc500,
          }}
        >
          <Link
            href={siteUrl}
            style={{ color: brand.accentDark, textDecoration: "none" }}
          >
            backbeat-band.co.uk
          </Link>
        </Text>
      </Section>
    </Layout>
  );
}

EnquiryConfirmation.PreviewProps = {
  name: "Jane Smith",
  eventDateFormatted: "Saturday, 12 September 2026",
  venue: "The Elvetham, Hook",
  message:
    "We'd love you to learn our first dance — 'Better Together' by Jack Johnson. Let us know if that's something you could do!",
} satisfies EnquiryConfirmationProps;

export default EnquiryConfirmation;
