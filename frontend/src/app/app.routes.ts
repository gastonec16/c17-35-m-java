import { Routes } from '@angular/router'

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'log-in',
        loadComponent: () => import('./components/log-in/log-in.component').then((c) => c.LogInComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./components/register/register.component').then((c) => c.RegisterComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard.component').then((c) => c.DashboardComponent)
    },
    {
        path: 'deposit',
        loadComponent: () => import('./components/deposit/deposit.component').then((c) => c.DepositComponent)
    },
    {
        path: 'withdraw',
        loadComponent: () => import('./components/withdraw/withdraw.component').then((c) => c.WithdrawComponent)
    }
]
