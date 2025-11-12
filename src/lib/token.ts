import { jwtDecode } from "jwt-decode";

export const setToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const getToken = (): string | null => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    let decoded = jwtDecode(token);
    if (!decoded.exp) return null;
    const expirationTimeInMilliseconds = decoded.exp * 1000;

    if (Date.now() >= expirationTimeInMilliseconds) {
      deleteToken();
      return null;
    }

    return token;
  } catch (error) {
    return null;
  }
};

export const deleteToken = (): void => {
  localStorage.removeItem("token");
};
