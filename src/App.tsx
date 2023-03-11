import { useContext } from "react";
import { Link } from "react-router-dom";
import "./presentation/styles/global.css";
import { AuthContext } from "./contexts/Auth/AuthContext";
import { Router } from "./main/routes/router";

const App = () => {
  const auth = useContext(AuthContext);
  const handleLogout = () => {
    auth.signout();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fretecom</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página privada</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
        <hr />
        <Router />
      </header>
    </div>
  );
};

export default App;
