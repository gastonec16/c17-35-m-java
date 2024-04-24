import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { AppComponent } from '../../app.component'
import { CryptoService } from '../../services/crypto.service'
import { UserService } from '../../services/user.service'
import { DashboardComponent } from '../dashboard/dashboard.component'

@Component({
    selector: 'app-account',
    standalone: true,
    imports: [],
    templateUrl: './account.component.html',
    styleUrl: './account.component.scss'
})
export class AccountComponent {
    appComponent = inject(AppComponent)
    dashboardComponent = inject(DashboardComponent)
    userService = inject(UserService)
    router = inject(Router)
    cryptoService = inject(CryptoService)
    isBuying = true
    user = this.dashboardComponent.user
    wallet = this.dashboardComponent.wallet

    logOut() {
        this.userService.logOut()
    }

    coinList = this.dashboardComponent.coinList

    goToDeposit() {
        this.router.navigate(['/deposit'])
    }
    goToWithdraw() {
        this.router.navigate(['/withdraw'])
    }
}
