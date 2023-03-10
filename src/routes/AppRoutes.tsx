import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../contexts/Auth/RequireAuth";
import { Home } from "../pages/home";
import { Private } from "../pages/private";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/private"
        element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export { AppRoutes };
