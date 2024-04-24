import { Component, inject } from '@angular/core'
import { FooterComponent } from '../footer/footer.component'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { UserService } from '../../services/user.service'
import { AllCryptoComponent } from '../all-crypto/all-crypto.component'
import { AccountComponent } from '../account/account.component'
import { BuySellComponent } from '../buy-sell/buy-sell.component'

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [AccountComponent, AllCryptoComponent, BuySellComponent, FooterComponent, FormsModule, RouterModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    userService = inject(UserService)

    logOut() {
        this.userService.logOut()
    }
}
