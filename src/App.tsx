import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Home from './pages/Home'
import Kitchen from './pages/Kitchen'
import Tablet from './pages/Tablet'
import Login from './pages/Login'

// Admin system
import ProtectedRoute from './components/ProtectedRoute'
import AdminLayout from './pages/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import Users from './pages/Users.tsx'
import Inventory from './pages/Inventory.tsx'
import Reports from './pages/Reports.tsx'
import Reservations from './pages/Reservations.tsx'

function App() {
  const [user, setUser] = useState<any>(null)

  return (
    <Router>
      <div className="app">

        {/* NAVBAR PRINCIPAL */}
        <nav className="main-nav">
          <div className="nav-container">
            <Link to="/" className="logo">
              <h1>🍽️ SIGER</h1>
            </Link>

            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/tablet">Tablet</Link>
              <Link to="/kitchen">Cocina</Link>
              <Link to="/admin">Admin</Link>

              {!user && (
                <Link to="/login" className="btn-login">
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>

        {/* CONTENIDO */}
        <main className="main-content">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login setUser={setUser} />} />

            <Route path="/kitchen" element={<Kitchen user={user} />} />

            <Route path="/tablet" element={<Tablet />} />

            {/* 🔐 ADMIN */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute user={user}>
                  <AdminLayout user={user} setUser={setUser} />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="reports" element={<Reports />} />
              <Route path="reservations" element={<Reservations />} />
            </Route>

          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2026 SIGER - Sistema de Gestión de Restaurante</p>
        </footer>

      </div>
    </Router>
  )
}

export default App
