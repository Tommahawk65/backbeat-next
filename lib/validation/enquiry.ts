import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.email("Please enter a valid email address"),
  eventDate: z.coerce
    .date({ message: "Please choose a valid date" })
    .refine((d) => d >= new Date(new Date().toDateString()), {
      message: "Event date must be in the future",
    }),
  venue: z
    .string()
    .trim()
    .min(2, "Please enter your venue or town")
    .max(200),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  // Attribution (optional — populated from URL params client-side)
  fbclid: z.string().max(500).optional().or(z.literal("")),
  gclid: z.string().max(500).optional().or(z.literal("")),
  // Honeypot — bots fill this. Humans don't see it.
  website: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
