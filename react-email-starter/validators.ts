import { z } from "zod";

const welcomeSchema = z.object({
  name: z.string(),
  uuid: z.string().uuid(),
  template: z.literal("welcome"),
});

const newsletterSchema = z.object({
  name: z.string(),
  uuid: z.string().uuid(),
  template: z.literal("newsletter"),
  summery: z.string(),
  link: z.string().url(),
});

const bodySchema = z.union([welcomeSchema, newsletterSchema]);

type Body = z.infer<typeof bodySchema>;
type WelcomeBody = z.infer<typeof welcomeSchema>;
type NewsletterBody = z.infer<typeof newsletterSchema>;

export { bodySchema, Body, WelcomeBody, NewsletterBody };
