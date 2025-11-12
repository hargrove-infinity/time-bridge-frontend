import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";
import { LOGIN } from "@/constants";
import {
  Button,
  FieldError,
  FieldLabel,
  Field,
  FieldGroup,
  Frame,
  Input,
  Password,
} from "@/components";
import { useRegister } from "./hooks";

export const Register = () => {
  const hook = useRegister();

  return (
    <Frame>
      <h3 className="mb-2 text-title-color font-semibold text-2xl">
        {hook.locales.title}
      </h3>
      <h4 className="mb-8 text-subtitle-color font-semibold text-base">
        {hook.locales.subTitle}
      </h4>
      <form onSubmit={hook.form.handleSubmit(hook.handleSubmit)}>
        <FieldGroup className="gap-3">
          <Controller
            name="email"
            control={hook.form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="mb-3 gap-1">
                <FieldLabel htmlFor="email">
                  {hook.locales.emailLabel}
                </FieldLabel>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder={hook.locales.emailLabel}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name="password"
            control={hook.form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel htmlFor="password">
                  {hook.locales.passwordLabel}
                </FieldLabel>
                <Password
                  {...field}
                  id="password"
                  aria-invalid={fieldState.invalid}
                  placeholder={hook.locales.passwordLabel}
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <Button type="submit" className="mt-8" isLoading={hook.loadingRegister}>
          {hook.locales.registerBtn}
        </Button>
      </form>
      <div className="mt-8 flex items-center gap-1">
        <p className="text-subtitle-color font-normal text-sm">
          {hook.locales.alreadyHaveAccount}
        </p>
        <Link to={LOGIN} className="text-link-color text-sm">
          {hook.locales.logInLink}
        </Link>
      </div>
    </Frame>
  );
};
