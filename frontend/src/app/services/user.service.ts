import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { LogInCredentials, RegisterUser } from '../interfaces/user'
import { environment } from '../environment'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    http = inject(HttpClient)

    registerUser(user: RegisterUser) {
        return this.http.post<any>(`${environment.apiBaseUrl}/public/register`, user)
    }

    logIn(user: LogInCredentials) {
        return this.http.post<any>(`${environment.apiBaseUrl}/public/log-in`, user)
    }

    logOut(){
        return this.http.post<any>(`${environment.apiBaseUrl}/api/logout`,{})
    }
}
