import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { RegisterUser } from '../interfaces/user'
import { environment } from '../environment'

@Injectable({
    providedIn: 'root'
})
export class UserService {
    http = inject(HttpClient)

    registerUser(user: RegisterUser) {
        return this.http.post<any>(`${environment.apiBaseUrl}/users`, user)
    }
}
