import type { ComponentProps } from "react";
import { FieldLabel as FieldLabelShadCN } from "@/components/ui/field";

type FieldLabelProps = ComponentProps<typeof FieldLabelShadCN>;

export const FieldLabel = (props: FieldLabelProps) => (
  <FieldLabelShadCN
    className={`
        text-field-label-text
        group-data-[invalid=true]/field:text-field-label-text-error
        ${props.className || ""}
      `}
    {...props}
  />
);
