import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { LogInCredentials, RegisterUser, User } from '../interfaces/user'
import { environment } from '../../environments/environment'

import Swal from 'sweetalert2'
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    http = inject(HttpClient)

    router = inject(Router)

    registerUser(user: RegisterUser) {
        return this.http.post<any>(`${environment.apiBaseUrl}/public/register`, user)
    }

    logIn(user: LogInCredentials) {
        return this.http.post<any>(`${environment.apiBaseUrl}/public/log-in`, user)
    }

    async logOut() {
        await localStorage.clear()
        if (!localStorage.getItem('token')) {
            Swal.fire({
                title: 'Éxito',
                text: 'Se ha cerrado tu sesión',
                icon: 'success',
                iconColor: 'var(--green-3)',
                confirmButtonText: 'Aceptar',
                customClass: { confirmButton: 'swal-button' }
            })
            this.router.navigate(['/'])
        }
    }

    setUserData(user: User) {
        localStorage.setItem('id', user.id.toString())
        localStorage.setItem('email', user.email)
        localStorage.setItem('name', user.name)
        localStorage.setItem('lastName', user.lastName)
        localStorage.setItem('token', user.token)
        localStorage.setItem('token', user.token)
    }
    getToken() {
        return localStorage.getItem('token')
    }

    getUserId() {
        return localStorage.getItem('id')
    }
    getUserData() {
        const idString = localStorage.getItem('id')
        const email = localStorage.getItem('email')
        const name = localStorage.getItem('name')
        const lastName = localStorage.getItem('lastName')

        const user = {
            id: idString ? parseInt(idString) : 0,
            email: email ? email : '',
            name: name ? name : '',
            lastName: lastName ? lastName : ''
        }
        return user
    }
}
