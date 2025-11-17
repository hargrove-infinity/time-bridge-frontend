import type { FC } from "react";
import { toast } from "sonner";
import { X } from "lucide-react";
import { cn } from "@/lib";
import type { ToastProps } from "./types";
import { toastPaletteMap, variantsWithIcon } from "./statics";
import { defineIcon } from "./helpers";

export const Toast: FC<ToastProps> = ({
  actions,
  description,
  id,
  title,
  variant,
}) => {
  const dismissToast = () => toast.dismiss(id);

  return (
    <div
      className={cn(
        "flex",
        "p-4",
        "rounded-md",
        "border",
        "border-solid",
        toastPaletteMap[variant].bg,
        toastPaletteMap[variant].border
      )}
    >
      {variantsWithIcon.includes(variant) && (
        <div className={cn("mr-2", toastPaletteMap[variant].icon)}>
          {defineIcon(variant)}
        </div>
      )}
      <div className="relative">
        {title && (
          <p
            className={cn(
              "font-montserrat",
              "font-semibold",
              "text-base",
              toastPaletteMap[variant].title
            )}
          >
            {title}
          </p>
        )}
        {description && (
          <p
            className={cn(
              "mt-2",
              "font-montserrat",
              "font-normal",
              "text-sm",
              toastPaletteMap[variant].text
            )}
          >
            {description}
          </p>
        )}
        {actions && (
          <div className="mt-2">
            {actions.map((action, idx) => (
              <button
                key={`${action.btnText}-${idx}`}
                className={cn(
                  "not-first:ml-2",
                  "font-montserrat",
                  "font-medium",
                  "text-sm",
                  "cursor-pointer",
                  toastPaletteMap[variant].buttonText
                )}
                onClick={action.cb}
              >
                {action.btnText}
              </button>
            ))}
          </div>
        )}
        <button
          className={cn(
            "absolute",
            "top-0",
            "right-0",
            "z-1",
            "cursor-pointer"
          )}
          onClick={dismissToast}
        >
          <div className={cn(toastPaletteMap[variant].icon)}>
            <X color="currentColor" />
          </div>
        </button>
      </div>
    </div>
  );
};
