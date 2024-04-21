export interface RegisterUser {
    name: string
    lastName: string
    email: string
    password: string
}

export interface LogInCredentials {
    email: string
    password: string
}

export interface User {
    email: string
    id: number
    name: string
    lastName: string
    password: string
    token: string
}
