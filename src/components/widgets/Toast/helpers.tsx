import type { JSX } from "react";
import { toast } from "sonner";
import { CircleAlert, CircleCheck, CircleX } from "lucide-react";
import type { NotifyArgs, ToastVariant } from "./types";
import { Toast } from "./Toast";

export function defineIcon(variant: ToastVariant): JSX.Element | null {
  switch (variant) {
    case "success":
      return <CircleCheck color="currentColor" />;

    case "info":
    case "warning":
      return <CircleAlert color="currentColor" />;

    case "error":
      return <CircleX color="currentColor" />;

    default:
      return null;
  }
}

export function notify(args: NotifyArgs): void {
  const { duration, id, ...rest } = args;
  toast.custom((toastId) => <Toast {...rest} id={toastId} />, { duration, id });
}
