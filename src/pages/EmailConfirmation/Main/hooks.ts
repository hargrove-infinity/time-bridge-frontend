import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useTranslation } from "react-i18next";
import { LOCAL_EMAIL_CONFIRM_NAMESPACE } from "@/constants";
import { otpCodeSchema } from "@/validation";
import { useStore } from "@/state";

export const useEmailConfirmation = () => {
  const { t } = useTranslation(LOCAL_EMAIL_CONFIRM_NAMESPACE);
  const { loadingEmailConfirm, emailConfirm } = useStore();

  const form = useForm<z.infer<typeof otpCodeSchema>>({
    resolver: zodResolver(otpCodeSchema),
    defaultValues: { code: "" },
  });

  const handleSubmit = ({ code }: z.infer<typeof otpCodeSchema>): void => {
    emailConfirm(code);
  };

  return {
    form,
    loadingEmailConfirm,
    locale: {
      title: t("heading.title"),
      subTitle: t("heading.subTitle"),
      inputOtpCodeLabel: t("form.inputOtpCodeLabel"),
      confirmBtn: t("buttons.confirmBtn"),
    },
    handleSubmit,
  };
};
