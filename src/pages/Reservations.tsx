import { useState } from 'react'
import BackButton from '../components/BackButton'
import './Reservations.css'

interface Reservation {
  id: number
  name: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  status: 'confirmed' | 'pending' | 'cancelled'
  notes?: string
}

function Reservations() {
  const [reservations] = useState<Reservation[]>([
    { id: 1001, name: 'Juan García', email: 'juan@example.com', phone: '+34 612 345 678', date: '2026-02-25', time: '19:30', guests: 4, status: 'confirmed', notes: 'Cumpleaños' },
    { id: 1002, name: 'María López', email: 'maria@example.com', phone: '+34 698 765 432', date: '2026-02-26', time: '13:00', guests: 2, status: 'confirmed' },
    { id: 1003, name: 'Carlos Rodríguez', email: 'carlos@example.com', phone: '+34 654 321 987', date: '2026-02-27', time: '20:00', guests: 6, status: 'pending' },
    { id: 1004, name: 'Ana Martínez', email: 'ana@example.com', phone: '+34 623 456 789', date: '2026-02-28', time: '19:00', guests: 3, status: 'confirmed' },
    { id: 1005, name: 'Pedro Sánchez', email: 'pedro@example.com', phone: '+34 645 789 123', date: '2026-03-01', time: '13:30', guests: 8, status: 'cancelled' },
  ])

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'confirmed': return 'status-confirmed'
      case 'pending': return 'status-pending'
      case 'cancelled': return 'status-cancelled'
      default: return 'status-pending'
    }
  }

  const getStatusName = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmada'
      case 'pending': return 'Pendiente'
      case 'cancelled': return 'Cancelada'
      default: return status
    }
  }

  return (
    <div className="reservations-container">
      <BackButton to="/admin" />
      <div className="page-header">
        <h1>Gestión de Reservaciones</h1>
        <p>Administra todas las reservaciones del restaurante</p>
      </div>

      <div className="content-section">
        <div className="section-header">
          <h2>Reservaciones Activas</h2>
          <button className="btn-add">Nueva Reservación</button>
        </div>

        <div className="filters-bar">
          <select className="filter-select">
            <option value="all">Todas las reservaciones</option>
            <option value="confirmed">Confirmadas</option>
            <option value="pending">Pendientes</option>
            <option value="cancelled">Canceladas</option>
          </select>
          <select className="filter-select">
            <option value="">Próximos 7 días</option>
            <option value="today">Hoy</option>
            <option value="week">Esta semana</option>
            <option value="month">Este mes</option>
          </select>
        </div>

        {reservations.length > 0 ? (
          <div className="reservations-grid">
            {reservations.map(reservation => (
              <div key={reservation.id} className="reservation-card">
                <div className="reservation-card-header">
                  <div>
                    <div className="reservation-id">#{reservation.id}</div>
                    <div style={{ fontSize: '0.9rem', color: '#718096', marginTop: '0.25rem' }}>
                      {new Date(reservation.date).toLocaleDateString('es-ES')}
                    </div>
                  </div>
                  <span className={`reservation-status ${getStatusClass(reservation.status)}`}>
                    {getStatusName(reservation.status)}
                  </span>
                </div>

                <div className="reservation-info">
                  <div className="info-row">
                    <div className="info-label">Nombre</div>
                    <div className="info-value">{reservation.name}</div>
                  </div>
                  <div className="info-row">
                    <div className="info-label">Email</div>
                    <div className="info-value">{reservation.email}</div>
                  </div>
                  <div className="info-row">
                    <div className="info-label">Teléfono</div>
                    <div className="info-value">{reservation.phone}</div>
                  </div>
                  <div className="info-row">
                    <div className="info-label">Hora</div>
                    <div className="info-value">{reservation.time}</div>
                  </div>
                  <div className="info-row">
                    <div className="info-label">Personas</div>
                    <div className="info-value">{reservation.guests} personas</div>
                  </div>
                  {reservation.notes && (
                    <div className="info-row">
                      <div className="info-label">Notas</div>
                      <div className="info-value">{reservation.notes}</div>
                    </div>
                  )}
                </div>

                <div className="reservation-actions">
                  <button className="btn-sm btn-primary-sm">Ver Detalles</button>
                  <button className="btn-sm btn-danger-sm">Eliminar</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-message">
            <p>No hay reservaciones registradas</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Reservations
