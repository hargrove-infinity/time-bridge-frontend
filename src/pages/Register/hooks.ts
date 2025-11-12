import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useTranslation } from "react-i18next";
import { LOCAL_REGISTER_NAMESPACE } from "@/constants";
import { authSchema } from "@/validation";
import { useStore } from "@/state";

export const useRegister = () => {
  const { t } = useTranslation(LOCAL_REGISTER_NAMESPACE);
  const { loadingRegister, register } = useStore();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleSubmit = (data: z.infer<typeof authSchema>): void => {
    register(data);
  };

  return {
    form,
    loadingRegister,
    locales: {
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
