// lib/zodSchemas.ts
import { z } from 'zod';

export const UserSchema = z.object({
  email: z.string().email(),
  // E.164 regex: starts with +, followed by 1-15 digits
  phoneNumber: z.string()
    .regex(/^\+[1-9]\d{1,14}$/, "Invalid international phone format")
    .optional(),
  name: z.string().optional(),
});
