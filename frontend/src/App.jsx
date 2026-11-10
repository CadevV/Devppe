import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from "react";
import "./index.css";
import { healthApi } from "./services/api.js";
import Login from "./pages/login/Login.jsx";
import Cadastrar from './pages/login/Cadastrar.jsx';

function App() {
  useEffect(() => {
    async function health() {
      await healthApi();
    }

    health();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastrar />} />
          <Route path='*' element={<h1>Pagina não encontrada 404</h1>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
