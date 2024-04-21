import { Injectable, inject } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs'
import { UserService } from './services/user.service'
import { environment } from './environment'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    userService = inject(UserService)

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.userService.getToken()
        const isLoggedIn: boolean = this.userService.getUserId() != ''
        const isApiUrl = request.url.startsWith(environment.apiBaseUrl + '/api')

        if (isLoggedIn && isApiUrl) {
            console.log(`Interceptando url ${request.url} con token ${token}`)
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` }
            })
            console.log(request.headers, 'asdasdasd')
        }
        return next.handle(request)
    }
}
