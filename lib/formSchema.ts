import { z } from 'zod';

export const formSchema = z.object({
  name: z.string()
    .min(1, "*This field is required")
    .max(32, "*Too many characters"),
  email: z.string()
    .min(1, "*This field is required")
    .email("*Please enter a valid email"),
  message: z.string()
    .min(1, "*This field is required")
    .max(750, "*Message is too long!")
});

export type ContactFormData = z.infer<typeof formSchema>;