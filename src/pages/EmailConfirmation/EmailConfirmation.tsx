import { Controller } from "react-hook-form";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import {
  Button,
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  Frame,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components";
import { useEmailConfirmation } from "./hooks";

export const EmailConfirmation = () => {
  const hook = useEmailConfirmation();

  return (
    <Frame>
      EmailConfirmation
      <form onSubmit={hook.form.handleSubmit(hook.handleSubmit)}>
        <FieldGroup className="gap-3">
          <Controller
            name="code"
            control={hook.form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="mb-3 gap-1">
                <FieldLabel htmlFor="email">
                  'hook.locale.emailLabel'
                </FieldLabel>
                <InputOTP
                  {...field}
                  id="code"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <Button type="submit" className="mt-8">
          'hook.locale.registerBtn'
        </Button>
      </form>
    </Frame>
  );
};
