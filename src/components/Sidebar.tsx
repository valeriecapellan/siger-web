import { Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import './Sidebar.css'

function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  }

  const user = JSON.parse(localStorage.getItem("user") || '{}')

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">
          <span className="sidebar-title-icon">🍽️</span>
          SIGER Admin
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <div className="nav-section-label">Inicio</div>
          <Link 
            to="/admin" 
            className={`nav-link ${isActive('/admin') && location.pathname === '/admin' ? 'active' : ''}`}
          >
            <span className="nav-link-icon">📊</span>
            Dashboard
          </Link>
        </div>

        <div className="nav-section">
          <div className="nav-section-label">Gestión</div>
          <Link 
            to="/admin/users" 
            className={`nav-link ${isActive('/admin/users') ? 'active' : ''}`}
          >
            <span className="nav-link-icon">👥</span>
            Usuarios
          </Link>
          <Link 
            to="/admin/reservations" 
            className={`nav-link ${isActive('/admin/reservations') ? 'active' : ''}`}
          >
            <span className="nav-link-icon">📅</span>
            Reservaciones
          </Link>
          <Link 
            to="/admin/inventory" 
            className={`nav-link ${isActive('/admin/inventory') ? 'active' : ''}`}
          >
            <span className="nav-link-icon">📦</span>
            Inventario
          </Link>
          <Link 
            to="/admin/kitchen" 
            className={`nav-link ${isActive('/admin/kitchen') ? 'active' : ''}`}
          >
            <span className="nav-link-icon">👨‍🍳</span>
            Cocina
          </Link>
        </div>

        <div className="nav-section">
          <div className="nav-section-label">Reportes</div>
          <Link 
            to="/admin/reports" 
            className={`nav-link ${isActive('/admin/reports') ? 'active' : ''}`}
          >
            <span className="nav-link-icon">📈</span>
            Reportes
          </Link>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">
            {user?.full_name?.charAt(0).toUpperCase() || 'A'}
          </div>
          <div className="user-details">
            <p className="user-name">{user?.full_name || 'Administrador'}</p>
            <p className="user-role">Admin</p>
          </div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}

export default Sidebar
