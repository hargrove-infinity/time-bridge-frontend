import type { ComponentProps } from "react";
import { FieldError as FieldErrorShadCN } from "@/components/ui/field";

type FieldErrorProps = ComponentProps<typeof FieldErrorShadCN>;

export const FieldError = (props: FieldErrorProps) => (
  <FieldErrorShadCN className="text-field-error-text" {...props} />
);
