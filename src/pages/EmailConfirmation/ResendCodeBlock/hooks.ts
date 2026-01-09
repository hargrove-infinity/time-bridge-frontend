import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { LOCAL_EMAIL_CONFIRM_NAMESPACE } from "@/constants";
import { useStore } from "@/state";

export const useResendCodeBlock = () => {
  const { t } = useTranslation(LOCAL_EMAIL_CONFIRM_NAMESPACE);

  const { nextResendTime, loadingResendCode, resendCode } = useStore();

  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  const calculateTimeRemaining = useCallback((targetDate: Date): number => {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const diff = Math.max(0, Math.floor((target - now) / 1000));
    return diff;
  }, []);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!nextResendTime) return;

    const interval = setInterval(() => {
      const remaining = calculateTimeRemaining(new Date(nextResendTime));
      setTimeRemaining(remaining);

      if (remaining === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nextResendTime, calculateTimeRemaining]);

  return {
    timeRemaining,
    isDisabled: timeRemaining > 0 || loadingResendCode,
    formattedTimeRemaining: formatTime(timeRemaining),
    locale: {
      question: t("resend.question"),
      resendBtn: loadingResendCode
        ? t("resend.resendBtnLoading")
        : t("resend.resendBtnDefault"),
    },
    resendCode,
  };
};
