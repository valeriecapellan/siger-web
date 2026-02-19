import { useState } from 'react'
import BackButton from '../components/BackButton'
import './Inventory.css'

interface InventoryItem {
  id: number
  name: string
  category: 'bebidas' | 'carnes' | 'verduras' | 'lacteos'
  stock: number
  minStock: number
  price: number
  icon: string
}

function Inventory() {
  const [activeTab, setActiveTab] = useState('all')
  
  const [items] = useState<InventoryItem[]>([
    { id: 1, name: 'Vino Tinto Reserva', category: 'bebidas', stock: 45, minStock: 20, price: 12.50, icon: '🍷' },
    { id: 2, name: 'Carne Wagyu', category: 'carnes', stock: 18, minStock: 15, price: 35.00, icon: '🥩' },
    { id: 3, name: 'Lechuga Fresca', category: 'verduras', stock: 50, minStock: 30, price: 2.50, icon: '🥗' },
    { id: 4, name: 'Queso Manchego', category: 'lacteos', stock: 12, minStock: 10, price: 8.75, icon: '🧀' },
    { id: 5, name: 'Cerveza Premium', category: 'bebidas', stock: 80, minStock: 50, price: 3.50, icon: '🍺' },
    { id: 6, name: 'Pechuga de Pollo', category: 'carnes', stock: 35, minStock: 25, price: 8.50, icon: '🍗' },
    { id: 7, name: 'Tomate Maduro', category: 'verduras', stock: 60, minStock: 40, price: 1.25, icon: '🍅' },
    { id: 8, name: 'Leche Fresca', category: 'lacteos', stock: 25, minStock: 20, price: 1.80, icon: '🥛' },
  ])

  const filteredItems = activeTab === 'all' 
    ? items 
    : items.filter(item => item.category === activeTab)

  const getStockStatus = (stock: number, minStock: number) => {
    const percentage = (stock / (minStock * 2)) * 100
    if (percentage < 50) return 'low'
    if (percentage < 75) return 'medium'
    return ''
  }

  const getStockPercentage = (stock: number, minStock: number) => {
    return Math.min((stock / (minStock * 2)) * 100, 100)
  }

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'bebidas', label: 'Bebidas' },
    { value: 'carnes', label: 'Carnes' },
    { value: 'verduras', label: 'Verduras' },
    { value: 'lacteos', label: 'Lácteos' },
  ]

  return (
    <div className="inventory-container">
      <BackButton to="/admin" />
      <div className="page-header">
        <h1>Gestión de Inventario</h1>
        <p>Controla el stock de productos y menú</p>
      </div>

      <div className="inventory-tabs">
        {categories.map(category => (
          <button
            key={category.value}
            className={`tab-btn ${activeTab === category.value ? 'active' : ''}`}
            onClick={() => setActiveTab(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="content-section">
        <div className="section-header">
          <h2>Productos ({filteredItems.length})</h2>
          <button className="btn-add">Agregar Producto</button>
        </div>

        {filteredItems.length > 0 ? (
          <div className="items-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="item-card">
                <div className="item-header">
                  <div className="item-icon">{item.icon}</div>
                  <h3 className="item-name">{item.name}</h3>
                </div>

                <div className="item-body">
                  <div className="item-info">
                    <div className="item-label">Stock Disponible</div>
                    <div className="item-value">{item.stock} unidades</div>
                    <div className="stock-bar">
                      <div 
                        className={`stock-fill ${getStockStatus(item.stock, item.minStock)}`}
                        style={{ width: `${getStockPercentage(item.stock, item.minStock)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="item-info">
                    <div className="item-label">Stock Mínimo</div>
                    <div className="item-value">{item.minStock} unidades</div>
                  </div>

                  <div className="item-info">
                    <div className="item-label">Precio Unitario</div>
                    <div className="price">${item.price.toFixed(2)}</div>
                  </div>

                  <div className="item-actions">
                    <button className="btn-sm btn-edit">Editar</button>
                    <button className="btn-sm btn-delete">Eliminar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-message">
            <p>No hay productos en esta categoría</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Inventory
