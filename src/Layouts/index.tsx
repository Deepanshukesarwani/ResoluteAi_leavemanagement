import Header from '../components/Header/index.header'
import Sidebar from '../components/SideBar/index.sidebar'
import { Outlet } from 'react-router-dom'
import Main from './main'
export default function MainLayout() {
  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  )
}
