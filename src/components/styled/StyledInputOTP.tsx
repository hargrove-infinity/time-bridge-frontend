import type { ComponentProps } from "react";
import {
  InputOTP as InputOTPShadCN,
  InputOTPGroup as InputOTPGroupShadCN,
  InputOTPSlot as InputOTPSlotShadCN,
  InputOTPSeparator as InputOTPSeparatorShadCN,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";

export const InputOTP = ({
  className,
  ...props
}: ComponentProps<typeof InputOTPShadCN>) => (
  <InputOTPShadCN className={cn("w-full", className)} {...props} />
);

export const InputOTPGroup = InputOTPGroupShadCN;

export const InputOTPSlot = ({
  className,
  ...props
}: ComponentProps<typeof InputOTPSlotShadCN>) => (
  <InputOTPSlotShadCN
    className={cn(
      "w-12",
      "h-12",
      "text-xl",
      "bg-input-otp-background",
      "text-input-otp-text",
      "border-input-otp-border",
      "[&.z-10]:ring-input-otp-ring",
      "[&>div>div]:bg-input-otp-caret",
      className
    )}
    {...props}
  />
);

export const InputOTPSeparator = ({
  className,
  ...props
}: ComponentProps<typeof InputOTPSeparatorShadCN>) => (
  <InputOTPSeparatorShadCN
    className={cn("text-input-otp-separator", className)}
    {...props}
  />
);
