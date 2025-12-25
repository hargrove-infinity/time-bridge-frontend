import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useTranslation } from "react-i18next";
import { LOCAL_REGISTER_NAMESPACE } from "@/constants";
import { authSchema } from "@/validation";
import { useStore } from "@/state";
import { getNextPath } from "@/lib";

export const useRegister = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(LOCAL_REGISTER_NAMESPACE);
  const { loadingRegister, nextStep, register } = useStore();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleSubmit = (data: z.infer<typeof authSchema>): void => {
    register(data);
  };

  useEffect(() => {
    if (nextStep) {
      const nextPath = getNextPath(nextStep);

      if (nextPath) {
        navigate(nextPath);
      }
    }
  }, [nextStep]);

  return {
    form,
    loadingRegister,
    locale: {
      title: t("heading.title"),
      subTitle: t("heading.subTitle"),
      emailLabel: t("form.emailLabel"),
      passwordLabel: t("form.passwordLabel"),
      registerBtn: t("buttons.registerBtn"),
      alreadyHaveAccount: t("additional.alreadyHaveAccount"),
      logInLink: t("additional.logInLink"),
    },
    handleSubmit,
  };
};
