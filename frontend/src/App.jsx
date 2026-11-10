import { useEffect } from "react";
import "./index.css";
import { healthApi } from "./services/api.js";
import Login from "./pages/login/Login.jsx";

function App() {
  useEffect(() => {
    async function health() {
      await healthApi();
    }

    health();
  }, []);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
