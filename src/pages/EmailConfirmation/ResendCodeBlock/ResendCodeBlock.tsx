import { Button } from "@/components";
import { useResendCodeBlock } from "./hooks";

export const ResendCodeBlock = () => {
  const hook = useResendCodeBlock();

  return (
    <div className="flex items-center gap-2">
      <span className="text-title-color font-normal text-sm">
        {hook.locale.question}
      </span>
      <Button
        type="button"
        variant="link"
        className="h-auto p-0 font-medium"
        disabled={hook.isDisabled}
        onClick={hook.resendCode}
      >
        {hook.locale.resendBtn}
      </Button>
      {hook.timeRemaining > 0 && (
        <span className="text-muted-foreground">
          ({hook.formattedTimeRemaining})
        </span>
      )}
    </div>
  );
};
