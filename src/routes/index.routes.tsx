import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/dashboard'
import MainLayout from '../Layouts'
import LoginPage from '../pages/login/login-page'

const RoutesProvider = () => {
  return (
   <Routes >
    <Route path='/afterLogin' element={<MainLayout/>}>
     <Route path='dashboard' element={<Dashboard/>}/>
    </Route>
    <Route path='/' element={<LoginPage/>}></Route>
   </Routes>
  )
}

export default RoutesProvider
