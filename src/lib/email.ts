export const setEmail = (email: string): void => {
  sessionStorage.setItem("email", email);
};

export const getEmail = (): string | null => {
  return sessionStorage.getItem("email");
};

export const deleteEmail = (): void => {
  sessionStorage.removeItem("email");
};
