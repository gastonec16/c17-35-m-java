import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { AppComponent } from '../../app.component'
import { CryptoService } from '../../services/crypto.service'
import { UserService } from '../../services/user.service'

@Component({
    selector: 'app-account',
    standalone: true,
    imports: [],
    templateUrl: './account.component.html',
    styleUrl: './account.component.scss'
})
export class AccountComponent {
    appComponent = inject(AppComponent)
    userService = inject(UserService)
    router = inject(Router)
    cryptoService = inject(CryptoService)
    isBuying = true
    user = this.appComponent.user
    wallet = this.appComponent.wallet
    walletCoins = this.appComponent.allWalletCoins

    logOut() {
        this.userService.logOut()
    }

    ngOnInit() {
        this.appComponent.obtainWallet()
    }

    coinList = this.appComponent.coinList

    goToDeposit() {
        this.router.navigate(['/deposit'])
    }
    goToWithdraw() {
        this.router.navigate(['/withdraw'])
    }
}
