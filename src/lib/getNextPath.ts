import { AUTH_STEPS, EMAIL_CONFIRMATION } from "@/constants";

export const getNextPath = (nextStep: string): string | null => {
  switch (nextStep) {
    case AUTH_STEPS.EMAIL_CONFIRMATION:
      return EMAIL_CONFIRMATION;

    default:
      return null;
  }
};
