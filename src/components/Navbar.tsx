
export default Navbar
import { useNavigate } from "react-router-dom"
import './Navbar.css'

interface Props {
  user: any
  setUser: any
}

function Navbar({ user, setUser }: Props) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    navigate("/")
  }

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h3 className="navbar-welcome">
            Bienvenido, {user?.full_name || 'Administrador'}
          </h3>
        </div>
        <div className="navbar-right">
          <button className="logout-btn-navbar" onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  )
}


