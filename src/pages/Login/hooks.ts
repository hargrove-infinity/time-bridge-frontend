import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { useTranslation } from "react-i18next";
import { LOCAL_LOGIN_NAMESPACE } from "@/constants";
import { authSchema } from "@/validation";
import { useStore } from "@/state";

export const useLogin = () => {
  const { t } = useTranslation(LOCAL_LOGIN_NAMESPACE);
  const { loadingLogin, login } = useStore();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleSubmit = (data: z.infer<typeof authSchema>): void => {
    login(data);
  };

  return {
    form,
    loadingLogin,
    locale: {
      title: t("heading.title"),
      subTitle: t("heading.subTitle"),
      emailLabel: t("form.emailLabel"),
      passwordLabel: t("form.passwordLabel"),
      logInBtn: t("buttons.logInBtn"),
      doNotHaveAccount: t("additional.doNotHaveAccount"),
      registerLink: t("additional.registerLink"),
    },
    handleSubmit,
  };
};
