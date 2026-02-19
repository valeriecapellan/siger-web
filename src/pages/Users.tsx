import { useState } from 'react'
import BackButton from '../components/BackButton'
import './Users.css'

interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user' | 'staff'
  status: 'active' | 'inactive'
  joinDate: string
}

function Users() {
  const [users] = useState<User[]>([
    { id: 1, name: 'Juan García', email: 'juan.garcia@example.com', role: 'admin', status: 'active', joinDate: '2025-01-15' },
    { id: 2, name: 'María López', email: 'maria.lopez@example.com', role: 'user', status: 'active', joinDate: '2025-02-01' },
    { id: 3, name: 'Carlos Rodríguez', email: 'carlos.r@example.com', role: 'staff', status: 'active', joinDate: '2025-02-05' },
    { id: 4, name: 'Ana Martínez', email: 'ana.martinez@example.com', role: 'user', status: 'inactive', joinDate: '2025-01-20' },
    { id: 5, name: 'Pablo Fernández', email: 'pablo.f@example.com', role: 'staff', status: 'active', joinDate: '2025-02-10' },
  ])

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'role-admin'
      case 'staff': return 'role-staff'
      default: return 'role-user'
    }
  }

  const getRoleName = (role: string) => {
    switch (role) {
      case 'admin': return 'Administrador'
      case 'staff': return 'Personal'
      default: return 'Usuario'
    }
  }

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'status-active' : 'status-inactive'
  }

  const getStatusName = (status: string) => {
    return status === 'active' ? 'Activo' : 'Inactivo'
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="users-container">
      <BackButton to="/admin" />
      <div className="page-header">
        <h1>Gestión de Usuarios</h1>
        <p>Administra los usuarios del sistema</p>
      </div>

      <div className="content-section">
        <div className="section-header">
          <h2>Lista de Usuarios</h2>
          <button className="btn-add">Agregar Usuario</button>
        </div>

        {users.length > 0 ? (
          <div className="users-table-wrapper">
            <table className="users-table">
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Email</th>
                  <th>Rol</th>
                  <th>Estado</th>
                  <th>Fecha de Registro</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>
                      <div className="user-info">
                        <div className="user-avatar">{getInitials(user.name)}</div>
                        <div>
                          <div className="user-name">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      <span className={`role-badge ${getRoleColor(user.role)}`}>
                        {getRoleName(user.role)}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${getStatusColor(user.status)}`}>
                        {getStatusName(user.status)}
                      </span>
                    </td>
                    <td>{new Date(user.joinDate).toLocaleDateString('es-ES')}</td>
                    <td>
                      <div className="actions">
                        <button className="btn-sm btn-edit">Editar</button>
                        <button className="btn-sm btn-delete">Eliminar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="empty-message">
            <p>No hay usuarios registrados</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Users
