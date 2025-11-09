import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { authSchema } from "@/validation";
import { useStore } from "@/state";

export const useLogin = () => {
  const { loadingLogin, login } = useStore();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleSubmit = (data: z.infer<typeof authSchema>) => {
    login(data);
  };

  return { form, loadingLogin, handleSubmit };
};
