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
    id: number
    email: string
    name: string
    lastName: string
    password: string
    token: string
}
