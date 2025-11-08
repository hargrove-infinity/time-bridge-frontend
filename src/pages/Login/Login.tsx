import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";
import { REGISTER } from "@/constants";
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
import { useLogin } from "./hooks";

export const Login = () => {
  const hook = useLogin();

  return (
    <Frame>
      <h3 className="mb-2 text-title-color font-semibold text-2xl">
        Log in to your account
      </h3>
      <h4 className="mb-8 text-subtitle-color font-semibold text-base">
        Continue your journey with us
      </h4>
      <form onSubmit={hook.form.handleSubmit(hook.handleSubmit)}>
        <FieldGroup className="gap-3">
          <Controller
            name="email"
            control={hook.form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="mb-3 gap-1">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  type="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="Email"
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
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Password
                  {...field}
                  id="password"
                  aria-invalid={fieldState.invalid}
                  placeholder="Password"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
        <Button type="submit" className="mt-8" isLoading={hook.loadingLogin}>
          Login
        </Button>
      </form>
      <div className="mt-8 flex items-center gap-1">
        <p className="text-subtitle-color font-normal text-sm">
          Don't have an account?
        </p>
        <Link to={REGISTER} className="text-link-color text-sm">
          Register
        </Link>
      </div>
    </Frame>
  );
};
