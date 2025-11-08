import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { authSchema } from "@/validation";
import { useStore } from "@/state";

export const useRegister = () => {
  const { loadingRegister, register } = useStore();

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: "", password: "" },
  });

  const handleSubmit = (data: z.infer<typeof authSchema>): void => {
    register(data);
  };

  return { form, loadingRegister, handleSubmit };
};
