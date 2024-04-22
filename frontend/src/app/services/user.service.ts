import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { LogInCredentials, RegisterUser, User } from '../interfaces/user'
import { environment } from '../environment'
import { CookieService } from 'ngx-cookie-service'
import { Observable } from 'rxjs'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    http = inject(HttpClient)
    cookies = inject(CookieService)
    router = inject(Router)

    registerUser(user: RegisterUser) {
        return this.http.post<any>(`${environment.apiBaseUrl}/public/register`, user)
    }

    logIn(user: LogInCredentials) {
        return this.http.post<any>(`${environment.apiBaseUrl}/public/log-in`, user)
    }

    async logOut() {
        await this.cookies.delete('token')
        await this.cookies.delete('id')
        await this.cookies.delete('email')
        await this.cookies.delete('name')
        await this.cookies.delete('lastName')
        if (!this.cookies.get('token')) {
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
        this.cookies.set('id', user.id.toString())
        this.cookies.set('email', user.email)
        this.cookies.set('name', user.name)
        this.cookies.set('lastName', user.lastName)
        this.cookies.set('token', user.token)
    }
    getToken() {
        return this.cookies.get('token')
    }

    getUserId() {
        return this.cookies.get('id')
    }
    getUserData() {
        const user = {
            id: parseInt(this.cookies.get('id')),
            email: this.cookies.get('email'),
            name: this.cookies.get('name'),
            lastName: this.cookies.get('lastName')
        }
        return user
    }
}
