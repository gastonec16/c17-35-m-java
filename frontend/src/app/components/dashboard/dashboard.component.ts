import { Component } from '@angular/core'
import { FooterComponent } from '../footer/footer.component'

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [FooterComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    user = {
        name: 'David',
        lastName: 'Reyes',
        email: 'davidreyes@hotmail.com',
        ars: 95123,
        usd: 215,
        crypto: [
            { id: 1, name: 'Bitcoin', shortName: 'BTC', quantity: 0.26 },
            { id: 2, name: 'Ethereum', shortName: 'ETH', quantity: 0.65 },
            { id: 3, name: 'USDT', shortName: 'USDT', quantity: 125 },
            { id: 4, name: 'BNB', shortName: 'BNB', quantity: 0.32 },
            { id: 5, name: 'Solana', shortName: 'SOL', quantity: 2.6 },
            { id: 6, name: 'Ripple', shortName: 'XRP', quantity: 3.6 },
            { id: 7, name: 'Dogecoin', shortName: 'DOGE', quantity: 666 }
        ]
    }

    logOut() {}
}
