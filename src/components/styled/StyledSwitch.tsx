import type { ComponentProps } from "react";
import { Switch as SwitchShadCN } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

type SwitchProps = ComponentProps<typeof SwitchShadCN>;

export const Switch = (props: SwitchProps) => (
  <SwitchShadCN
    className={cn(
      "cursor-pointer",
      "w-[60px] h-[30px] rounded-full border-2 border-switch-border",
      "bg-switch-background transition-all",
      "data-[state=checked]:bg-switch-background-checked",
      "dark:data-[state=checked]:[&>span]:bg-switch-background",
      "hover:ring-2 hover:ring-switch-ring",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-switch-ring"
    )}
    {...props}
  />
);
