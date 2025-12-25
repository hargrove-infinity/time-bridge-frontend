import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Frame, InputOTP, InputOTPGroup, InputOTPSlot } from "@/components";

export const EmailConfirmation = () => {
  return (
    <Frame>
      EmailConfirmation
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </Frame>
  );
};
