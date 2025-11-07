import * as z from "zod";

export const authSchema = z.object({
  email: z.email("Incorrect email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
      "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),
});
