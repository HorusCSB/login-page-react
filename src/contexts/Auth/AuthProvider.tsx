import { useEffect, useState } from "react";
import { User } from "../../domain/entities/User";
import { useApi } from "../../presentation/hooks/useApi";
import { AuthContext } from "./AuthContext";
interface IProvider {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: IProvider) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi;
  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem("authToken");
      if (storageData) {
        const data = await api.validateToken(storageData);
        console.log(data);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, [api]);

  const signin = async (email: string, password: string) => {
    const data = await useApi.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    await useApi.logout();
    setUser(null);
    localStorage.setItem("authToken", "");
    setToken("");
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
