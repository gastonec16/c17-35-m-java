import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { LogInCredentials, RegisterUser } from '../interfaces/user'
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
        await this.cookies.delete('userId')
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

    setToken(token: string) {
        this.cookies.set('token', token)
    }
    getToken() {
        return this.cookies.get('token')
    }
    setUserId(userId: number) {
        this.cookies.set('userId', userId.toString())
    }
    getUserId() {
        return this.cookies.get('userId')
    }

    getUserData(): Observable<any> {
        return this.http.get<any>(`${environment.apiBaseUrl}/api/users/${this.cookies.get('userId')}`)
    }
}
