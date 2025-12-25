import { z } from "zod";

export const otpCodeSchema = z.object({
  code: z
    .string("ERROR_DEFINITIONS.EMAIL_CONFIRM_CODE_NOT_STRING.code")
    .regex(
      /^\d{6}$/,
      "ERROR_DEFINITIONS.EMAIL_CONFIRM_CODE_MUST_BE_6_DIGITS.code"
    ),
});
