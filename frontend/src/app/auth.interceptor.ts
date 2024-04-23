import { HttpInterceptorFn } from '@angular/common/http'
import { environment } from '../environments/environment'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const token = localStorage.getItem('token')

    const isApiUrl = req.url.startsWith(environment.apiBaseUrl + '/api')

    if (isApiUrl) {
        console.log(`Interceptando url ${req.url} con token ${token}`)
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log('Los headers del request: ', req.headers)
    }

    return next(req)
}
