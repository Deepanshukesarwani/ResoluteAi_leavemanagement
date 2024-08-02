// import { useState } from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Loginpage from './pages/login/login-page';
import Dashboard from './pages/dashboard/dashboard';
function App() {
  // const [count, setCount] = useState(0)

  return (
  <>
 <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loginpage/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
