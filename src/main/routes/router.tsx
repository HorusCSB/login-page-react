import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "../../contexts/Auth/RequireAuth";
import { Home } from "../../presentation/pages/home";
import { Private } from "../../presentation/pages/private";

const Router = () => {
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

export { Router };
