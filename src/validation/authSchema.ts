import * as z from "zod";
import {
  INCORRECT_EMAIL,
  PASSWORD_LENGTH,
  PASSWORD_PATTERN,
} from "@/constants";

export const authSchema = z.object({
  email: z.email(INCORRECT_EMAIL),
  password: z
    .string()
    .min(8, PASSWORD_LENGTH)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, PASSWORD_PATTERN),
});
