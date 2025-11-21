import * as z from "zod";
import {
  EMAIL_INCORRECT_PATTERN,
  PASSWORD_NOT_STRING,
  PASSWORD_MIN_LEN_FAILED,
  PASSWORD_REQUIREMENTS_NOT_MET,
} from "@/constants";

export const authSchema = z.object({
  email: z.email(EMAIL_INCORRECT_PATTERN),
  password: z
    .string(PASSWORD_NOT_STRING)
    .min(8, PASSWORD_MIN_LEN_FAILED)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, PASSWORD_REQUIREMENTS_NOT_MET),
});
