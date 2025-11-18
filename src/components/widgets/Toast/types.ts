export type ToastVariant = "success" | "info" | "warning" | "error" | "default";

interface ToastAction {
  btnText: string;
  cb: () => void;
}

export interface ToastProps {
  actions?: ToastAction[];
  description?: string;
  id: number | string;
  title: string;
  variant: ToastVariant;
}

export interface NotifyArgs {
  actions?: { btnText: string; cb: () => void }[];
  description?: string;
  duration?: number;
  id: string;
  title: string;
  variant: ToastVariant;
}
