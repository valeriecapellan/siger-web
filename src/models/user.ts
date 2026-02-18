export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    full_name: string;
    role: 'admin' | 'waiter' | 'kitchen' | string;
    phone: string;
    status: 'active' | 'inactive' | string;
}