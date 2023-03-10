import { useContext } from "react";
import { Link } from "react-router-dom";
import "./assets/styles/global.css";
import { AuthContext } from "./contexts/Auth/AuthContext";
import { AppRoutes } from "./routes/AppRoutes";

const App = () => {
  const auth = useContext(AuthContext);
  const handleLogout = () => {
    auth.signout();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Header do site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página privada</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
        <hr />
        <AppRoutes />
      </header>
    </div>
  );
};

export default App;
