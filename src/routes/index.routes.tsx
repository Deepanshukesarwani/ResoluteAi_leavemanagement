import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard/dashboard'
import MainLayout from '../Layouts'
import LoginPage from '../pages/login/login-page'
import UserDashboard from '../pages/userDashboard/Dashboard.user'

const RoutesProvider = () => {
  return (
   <Routes >
    <Route path='/afterLogin' element={<MainLayout/>}>
     <Route path='dashboard' element={<Dashboard/>}/>
     <Route path="userDashboard" element={<UserDashboard/>}/>
    </Route>
    <Route path='/' element={<LoginPage/>}></Route>
   </Routes>
  )
}

export default RoutesProvider
