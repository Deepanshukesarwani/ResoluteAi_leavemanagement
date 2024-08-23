// import { useState } from 'react'
import { BrowserRouter, 
  // Route,
  //  Routes 
  } from "react-router-dom";
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
