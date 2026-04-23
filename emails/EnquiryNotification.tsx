import { Heading, Section, Text } from "@react-email/components";

import { Layout, brand } from "./_components/Layout";

export interface EnquiryNotificationProps {
  name: string;
  email: string;
  eventDateFormatted: string;
  venue: string;
  message?: string;
  fbclid?: string;
  gclid?: string;
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

export function EnquiryNotification({
  name = "Jane Smith",
  email = "jane@example.com",
  eventDateFormatted = "Saturday, 12 September 2026",
  venue = "The Elvetham, Hook",
  message = "We'd love you to learn our first dance — 'Better Together' by Jack Johnson. Let us know if that's something you could do!",
  fbclid,
  gclid,
}: EnquiryNotificationProps) {
  const attribution = [
    fbclid ? `fbclid: ${fbclid}` : null,
    gclid ? `gclid: ${gclid}` : null,
  ].filter(Boolean) as string[];

  return (
    <Layout preview={`New enquiry from ${name} — ${eventDateFormatted}`}>
      <Text style={eyebrow}>New enquiry</Text>
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
        {name}
      </Heading>

      <Section
        style={{
          marginTop: "24px",
          padding: "4px 0",
          backgroundColor: brand.cream,
          borderRadius: "10px",
        }}
      >
        <div style={{ padding: "16px 22px" }}>
          <Text style={label}>Email</Text>
          <Text style={value}>
            <a
              href={`mailto:${email}`}
              style={{ color: brand.accentDark, textDecoration: "none" }}
            >
              {email}
            </a>
          </Text>
        </div>
        <div
          style={{
            borderTop: `1px solid ${brand.creamDark}`,
            padding: "16px 22px",
          }}
        >
          <Text style={label}>Event date</Text>
          <Text style={value}>{eventDateFormatted}</Text>
        </div>
        <div
          style={{
            borderTop: `1px solid ${brand.creamDark}`,
            padding: "16px 22px",
          }}
        >
          <Text style={label}>Venue / town</Text>
          <Text style={value}>{venue}</Text>
        </div>
        {message ? (
          <div
            style={{
              borderTop: `1px solid ${brand.creamDark}`,
              padding: "16px 22px",
            }}
          >
            <Text style={label}>Message</Text>
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

      {attribution.length ? (
        <Section
          style={{
            marginTop: "36px",
            paddingTop: "20px",
            borderTop: `1px solid ${brand.zinc200}`,
          }}
        >
          <Text style={label}>Attribution</Text>
          {attribution.map((line) => (
            <Text
              key={line}
              style={{
                margin: "8px 0 0",
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: "12px",
                color: brand.zinc600,
                wordBreak: "break-all" as const,
              }}
            >
              {line}
            </Text>
          ))}
        </Section>
      ) : null}
    </Layout>
  );
}

export default EnquiryNotification;
