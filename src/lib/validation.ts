import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().trim().min(3).max(255),
    email: z.string().trim().email(),
    password: z.string().min(8),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Password doesn't match",
    path: ["password_confirmation"],
  });

export type RegisterFormData = z.infer<typeof registerFormSchema>;
