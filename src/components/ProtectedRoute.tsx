import { Navigate } from "react-router-dom"

interface Props {
  user: any
  children: React.ReactNode
}

function ProtectedRoute({ user, children }: Props) {

  // 1️⃣ No hay usuario → ir a login
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // 2️⃣ Hay usuario pero no es admin
  if (user.role?.toLowerCase() !== "admin") {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Acceso Denegado</h2>
        <p>No tienes permisos para acceder a esta sección.</p>
      </div>
    )
  }

  // 3️⃣ Todo correcto
  return <>{children}</>
}

export default ProtectedRoute
