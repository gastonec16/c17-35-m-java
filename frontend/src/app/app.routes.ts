import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: 'log-in',
        loadComponent: () => import('./components/log-in/log-in.component').then((c) => c.LogInComponent)
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./components/register/register.component').then((c) => c.RegisterComponent)
    }
]
