// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/login/login-page";
import Dashboard from "./pages/dashboard/dashboard";
import RoutesProvider from "./routes/index.routes";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <RoutesProvider />
      </BrowserRouter>
    </>
  );
}

export default App;
