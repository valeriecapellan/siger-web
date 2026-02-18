export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled';

export type OrderType = 'dine-in' | 'takeaway';

// Esta interfaz contiene los detalles de la orden (es decir, los ítems que trae la orden dentro)
export interface OrderDetail {
    id: number;
    order_id: number;
    product_id: number;
    product_name: string;
    quantity: number;
    price: number;
    subtotal: number;
}

// Esta interfaz es de la orden como tal
export interface Order {
    id: number;
    table_number: string;
    customer_name: string;
    total: number;
    status: OrderStatus;
    order_type: OrderType;
    notes?: string;

    // Propiedades extra
    items_summary?: string;
    items_count?: number;

    // Para cuando se cargue la orden con un getById
    items?: OrderDetail[];

    // Props frontend
    elapsed_minutes?: number;
    is_delayed?: boolean;
}