import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

interface Props {
  user: any
  setUser: any
}

function AdminLayout({ user, setUser }: Props) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, marginLeft: "260px", display: "flex", flexDirection: "column", background: "#f7fafc" }}>
        <Navbar user={user} setUser={setUser} />

        <div style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminLayout
