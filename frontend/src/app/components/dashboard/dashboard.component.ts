import { Component, inject } from '@angular/core'
import { FooterComponent } from '../footer/footer.component'
import { Router, RouterModule } from '@angular/router'
import { CryptoService } from '../../services/crypto.service'
import { CryptoYaOutput } from '../../interfaces/crypto'
import Swal from 'sweetalert2'

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [FooterComponent, RouterModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    router = inject(Router)
    cryptoService = inject(CryptoService)

    // TODO: obtener del backend
    user = {
        id: 34,
        name: 'David',
        lastName: 'Reyes',
        email: 'davidreyes@hotmail.com',
        ars: 95123,
        usd: 215,
        crypto: [
            { coin: { id: 1, name: 'Cardano', shortName: 'ADA' }, quantity: 0 },
            { coin: { id: 2, name: 'Basic Attention Token', shortName: 'BAT' }, quantity: 0 },
            { coin: { id: 3, name: 'Bitcoin Cash', shortName: 'BCH' }, quantity: 0 },
            { coin: { id: 4, name: 'Bitcoin', shortName: 'BTC' }, quantity: 0.26 },
            { coin: { id: 5, name: 'Dai', shortName: 'DAI' }, quantity: 0 },
            { coin: { id: 6, name: 'Dogecoin', shortName: 'DOGE' }, quantity: 666 },
            { coin: { id: 7, name: 'Polkadot', shortName: 'DOT' }, quantity: 0 },
            { coin: { id: 8, name: 'Ethereum', shortName: 'ETH' }, quantity: 0.65 },
            { coin: { id: 9, name: 'ChainLink', shortName: 'LINK' }, quantity: 0 },
            { coin: { id: 10, name: 'Litecoin', shortName: 'LTC' }, quantity: 0 },
            { coin: { id: 11, name: 'Decentraland', shortName: 'MANA' }, quantity: 0 },
            { coin: { id: 12, name: 'Polygon', shortName: 'MATIC' }, quantity: 0 },
            { coin: { id: 13, name: 'SHIBA INU', shortName: 'SHIB' }, quantity: 245 },
            { coin: { id: 14, name: 'Solana', shortName: 'SOL' }, quantity: 2.6 },
            { coin: { id: 15, name: 'TRON', shortName: 'TRX' }, quantity: 0 },
            { coin: { id: 16, name: 'USD Coin', shortName: 'USDC' }, quantity: 0 },
            { coin: { id: 17, name: 'TetherUS', shortName: 'USDT' }, quantity: 125 },
            { coin: { id: 18, name: 'Ripple', shortName: 'XRP' }, quantity: 3.6 }
        ],
        avatar: 0
    }

    logOut() {
        this.router.navigate(['/'])
    }

    crypto: CryptoYaOutput[] = []

    // TODO: obtener del backend
    coinList = [
        { id: 1, name: 'Cardano', shortName: 'ADA' },
        { id: 2, name: 'Basic Attention Token', shortName: 'BAT' },
        { id: 3, name: 'Bitcoin Cash', shortName: 'BCH' },
        { id: 4, name: 'Bitcoin', shortName: 'BTC' },
        { id: 5, name: 'Dai', shortName: 'DAI' },
        { id: 6, name: 'Dogecoin', shortName: 'DOGE' },
        { id: 7, name: 'Polkadot', shortName: 'DOT' },
        { id: 8, name: 'Ethereum', shortName: 'ETH' },
        { id: 9, name: 'ChainLink', shortName: 'LINK' },
        { id: 10, name: 'Litecoin', shortName: 'LTC' },
        { id: 11, name: 'Decentraland', shortName: 'MANA' },
        { id: 12, name: 'Polygon', shortName: 'MATIC' },
        { id: 13, name: 'SHIBA INU', shortName: 'SHIB' },
        { id: 14, name: 'Solana', shortName: 'SOL' },
        { id: 15, name: 'TRON', shortName: 'TRX' },
        { id: 16, name: 'USD Coin', shortName: 'USDC' },
        { id: 17, name: 'TetherUS', shortName: 'USDT' },
        { id: 18, name: 'Ripple', shortName: 'XRP' }
    ]

    getCryptoPrices(crypto: string, fiat: string) {
        this.cryptoService.getCryptoPrices(crypto, fiat).subscribe({
            next: (data) => {
                this.crypto = data
            },
            error: (err) => {
                Swal.fire({
                    title: 'Error',
                    text: err.error.message,
                    icon: 'error'
                })
            }
        })
    }


    goToDeposit() {
        this.router.navigate(['/deposit'])
    }
    goToWithdraw() {
        this.router.navigate(['/withdraw'])
    }
}
