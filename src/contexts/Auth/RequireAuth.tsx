import { useContext } from "react";
import { Login } from "../../presentation/pages/Login";
import { AuthContext } from "./AuthContext";

interface RequireAuthType {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthType) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }
  return children;
};
