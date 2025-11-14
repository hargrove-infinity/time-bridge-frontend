import type { ComponentProps } from "react";
import { useTranslation } from "react-i18next";
import { FieldError as FieldErrorShadCN } from "@/components/ui/field";
import { LOCAL_ERRORS_NAMESPACE } from "@/constants";

type FieldErrorProps = ComponentProps<typeof FieldErrorShadCN>;

export const FieldError = ({ errors, ...props }: FieldErrorProps) => {
  const { t } = useTranslation(LOCAL_ERRORS_NAMESPACE);

  const errorsTranslated = errors
    ? errors.map((error) => {
        if (error?.message) {
          return { ...error, message: t(error.message) };
        }

        return error;
      })
    : undefined;

  return (
    <FieldErrorShadCN
      className="text-field-error-text"
      errors={errorsTranslated}
      {...props}
    />
  );
};
