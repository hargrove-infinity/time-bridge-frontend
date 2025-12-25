import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { otpCodeSchema } from "@/validation";

export const useEmailConfirmation = () => {
  const form = useForm<z.infer<typeof otpCodeSchema>>({
    resolver: zodResolver(otpCodeSchema),
    defaultValues: { code: "" },
  });

  const handleSubmit = (data: z.infer<typeof otpCodeSchema>): void => {
    console.log("data: ", data);
  };

  return {
    form,
    loadingEmailConfirm: false,
    handleSubmit,
  };
};
