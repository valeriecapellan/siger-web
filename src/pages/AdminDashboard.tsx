import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminDashboard.css'

function AdminDashboard() {
  const navigate = useNavigate()
  const [stats] = useState({
    totalReservations: 1243,
    reservationsToday: 28,
    totalOrders: 5847,
    ordersToday: 142,
    activeUsers: 324,
    monthlyRevenue: '$45,230',
  })

  const [recentActivity] = useState([
    { id: 1, type: 'user', title: 'Nuevo usuario registrado', description: 'Juan Pérez se registró en el sistema', time: 'Hace 5 min' },
    { id: 2, type: 'order', title: 'Nueva orden completada', description: 'Orden #5847 fue procesada', time: 'Hace 12 min' },
    { id: 3, type: 'reservation', title: 'Reserva confirmada', description: 'Mesa para 6 personas - 19:30', time: 'Hace 25 min' },
    { id: 4, type: 'user', title: 'Usuario inactivo', description: 'María García no ha iniciado sesión en 30 días', time: 'Hace 1 hora' },
    { id: 5, type: 'order', title: 'Nuevo pedido', description: 'Orden #5846 fue creada', time: 'Hace 2 horas' },
  ])

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'user': return '👤'
      case 'order': return '📦'
      case 'reservation': return '📅'
      default: return '📍'
    }
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Panel de Administración</h1>
        <p>Bienvenido de vuelta, Administrador</p>
      </div>

      {/* Estadísticas */}
      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-card-header">
            <div>
              <div className="stat-card-label">Reservaciones</div>
              <div className="stat-card-value">{stats.totalReservations}</div>
              <div className="stat-card-trend up">
                ↑ {stats.reservationsToday} hoy
              </div>
            </div>
            <div className="stat-card-icon">📅</div>
          </div>
        </div>

        <div className="stat-card success">
          <div className="stat-card-header">
            <div>
              <div className="stat-card-label">Órdenes</div>
              <div className="stat-card-value">{stats.totalOrders}</div>
              <div className="stat-card-trend up">
                ↑ {stats.ordersToday} hoy
              </div>
            </div>
            <div className="stat-card-icon">📦</div>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-card-header">
            <div>
              <div className="stat-card-label">Usuarios Activos</div>
              <div className="stat-card-value">{stats.activeUsers}</div>
              <div className="stat-card-trend up">
                ↑ 12% vs mes anterior
              </div>
            </div>
            <div className="stat-card-icon">👥</div>
          </div>
        </div>

        <div className="stat-card danger">
          <div className="stat-card-header">
            <div>
              <div className="stat-card-label">Ingresos Mensuales</div>
              <div className="stat-card-value">{stats.monthlyRevenue}</div>
              <div className="stat-card-trend up">
                ↑ 8% vs mes anterior
              </div>
            </div>
            <div className="stat-card-icon">💰</div>
          </div>
        </div>
      </div>

      {/* Accesos rápidos */}
      <div className="dashboard-section">
        <h2 className="section-title">Accesos Rápidos</h2>
        <div className="quick-links">
          <button onClick={() => navigate('/admin/users')} className="link-card">
            Gestionar Usuarios
          </button>
          <button onClick={() => navigate('/admin/reservations')} className="link-card secondary">
            Ver Reservaciones
          </button>
          <button onClick={() => navigate('/admin/inventory')} className="link-card tertiary">
            Inventario
          </button>
          <button onClick={() => navigate('/admin/kitchen')} className="link-card quaternary">
            Cocina
          </button>
        </div>
      </div>

      {/* Actividad reciente */}
      <div className="dashboard-section">
        <h2 className="section-title">📊 Actividad Reciente</h2>
        <div className="recent-activity">
          {recentActivity.length > 0 ? (
            recentActivity.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="activity-content">
                  <p className="activity-title">{activity.title}</p>
                  <p className="activity-description">{activity.description}</p>
                </div>
                <div className="activity-time">{activity.time}</div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <p>No hay actividad reciente</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
