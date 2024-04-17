import { Component, inject } from '@angular/core'
import { FooterComponent } from '../footer/footer.component'
import { Router, RouterModule } from '@angular/router'
import { CryptoService } from '../../services/crypto.service'
import Swal from 'sweetalert2'
import { FormsModule } from '@angular/forms'
import { UserService } from '../../services/user.service'
import { AppComponent } from '../../app.component'

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [FooterComponent, FormsModule, RouterModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
    appComponent = inject(AppComponent)
    router = inject(Router)
    cryptoService = inject(CryptoService)
    isBuying = true

    userService = inject(UserService)

    operationBuy = {
        fiat: '',
        fiatQuantity: null,
        crypto: 0,
        cryptoQuantity: null
    }
    operationSell = {
        crypto: 0,
        cryptoQuantity: null,
        fiat: '',
        fiatQuantity: null
    }

    cryptoBuyValue = 0
    cryptoSellValue = 0

    getCryptoBuyValue() {
        if (this.operationBuy.fiat == '' || this.operationBuy.crypto == 0) {
            this.cryptoBuyValue = 0
        } else if (this.operationBuy.fiat == 'ARS' && this.operationBuy.fiatQuantity) {
            this.cryptoBuyValue = this.operationBuy.fiatQuantity / this.coinList[this.operationBuy.crypto - 1].arsBuy
        } else if (this.operationBuy.fiat == 'USD' && this.operationBuy.fiatQuantity) {
            this.cryptoBuyValue = this.operationBuy.fiatQuantity / this.coinList[this.operationBuy.crypto - 1].usdBuy
        }
    }

    getCryptoSellValue() {
        if (this.operationSell.fiat == '' || this.operationSell.crypto == 0) {
            this.cryptoSellValue = 0
        } else if (this.operationSell.fiat == 'ARS' && this.operationSell.cryptoQuantity) {
            this.cryptoSellValue =
                this.operationSell.cryptoQuantity * this.coinList[this.operationSell.crypto - 1].arsSell
        } else if (this.operationSell.fiat == 'USD' && this.operationSell.cryptoQuantity) {
            this.cryptoSellValue =
                this.operationSell.cryptoQuantity * this.coinList[this.operationSell.crypto - 1].usdSell
        }
    }

    user = {
        id: 34,
        name: 'David',
        lastName: 'Reyes',
        email: 'davidreyes@hotmail.com',
        ars: 95123,
        usd: 215,
        crypto: [
            { coin: { id: 2, name: 'Cardano', shortName: 'ADA' }, quantity: 0 },
            { coin: { id: 7, name: 'Bitcoin', shortName: 'BTC' }, quantity: 0.26 },
            { coin: { id: 8, name: 'Dai', shortName: 'DAI' }, quantity: 0 },
            { coin: { id: 9, name: 'Polkadot', shortName: 'DOT' }, quantity: 0.67 },
            { coin: { id: 10, name: 'Ethereum', shortName: 'ETH' }, quantity: 0.65 },
            { coin: { id: 12, name: 'Litecoin', shortName: 'LTC' }, quantity: 0 },
            { coin: { id: 13, name: 'Decentraland', shortName: 'MANA' }, quantity: 21 },
            { coin: { id: 14, name: 'Polygon', shortName: 'MATIC' }, quantity: 42.5 },
            { coin: { id: 18, name: 'Solana', shortName: 'SOL' }, quantity: 2.6 },
            { coin: { id: 20, name: 'USD Coin', shortName: 'USDC' }, quantity: 0 },
            { coin: { id: 21, name: 'TetherUS', shortName: 'USDT' }, quantity: 125 }
        ],
        avatar: 0
    }

    ngOnInit() {
        this.getCryptoPrices()
    }

    logOut() {
        this.userService.logOut().subscribe(
          () => {
            console.log('Logout exitoso');
            this.router.navigate(["/"])
          },
          error => {
            console.error('Error al realizar el logout:', error);
          }
        );
      }

    coinList = [
        { coin: { id: 1, name: 'Aave', shortName: 'AAVE' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 2, name: 'Cardano', shortName: 'ADA' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 3, name: 'Algorand', shortName: 'ALGO' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 4, name: 'Avalanche', shortName: 'AVAX' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 5, name: 'Axie Infinity', shortName: 'AXS' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 6, name: 'BNB', shortName: 'BNB' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 7, name: 'Bitcoin', shortName: 'BTC' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 8, name: 'Dai', shortName: 'DAI' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 9, name: 'Polkadot', shortName: 'DOT' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 10, name: 'Ethereum', shortName: 'ETH' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 11, name: 'Fantom', shortName: 'FTM' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 12, name: 'Litecoin', shortName: 'LTC' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 13, name: 'Decentraland', shortName: 'MANA' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 14, name: 'Polygon', shortName: 'MATIC' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 15, name: 'PAX Gold', shortName: 'PAXG' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 16, name: 'The Sandbox', shortName: 'SAND' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 17, name: 'SLP', shortName: 'SLP' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 18, name: 'Solana', shortName: 'SOL' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 19, name: 'Uniswap', shortName: 'UNI' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 20, name: 'USD Coin', shortName: 'USDC' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 21, name: 'TetherUS', shortName: 'USDT' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 },
        { coin: { id: 22, name: 'Stellar Lumens', shortName: 'XLM' }, usdBuy: 0, arsBuy: 0, usdSell: 0, arsSell: 0 }
    ]
    // AAVE , ADA , ALGO , AVAX , AXS , BNB , BTC , DAI , DOT , ETH , FTM , LTC ,
    // MANA , MATIC , PAXG , SAND , SLP , SOL , UNI , USDC , USDT , XLM

    refresh() {
        this.getCryptoPrices()
        Swal.fire({
            title: 'Éxito',
            text: 'Se ha actualizado la cotización de todas las criptomonedas',
            icon: 'success',
            iconColor: 'var(--green-3)',
            confirmButtonText: 'Aceptar',
            customClass: { confirmButton: 'swal-button' }
        })
    }

    usdArsPrice = 0

    getCryptoPrices() {
        let usdtUsdPrice = 1

        this.cryptoService.getUsdtPrice().subscribe({
            next: (data) => {
                if (data.ask) {
                    usdtUsdPrice = data.ask
                }

                this.cryptoService.getCryptoPrices('usdt', 'ars').subscribe({
                    next: (data) => {
                        this.usdArsPrice = usdtUsdPrice * data.ask

                        this.coinList.forEach((item) => {
                            this.cryptoService.getCryptoPrices(item.coin.shortName, 'ars').subscribe({
                                next: (data) => {
                                    if (data.ask) {
                                        this.coinList[item.coin.id - 1].arsSell = data['bid']
                                        this.coinList[item.coin.id - 1].usdSell = data['bid'] / this.usdArsPrice
                                        this.coinList[item.coin.id - 1].arsBuy = data['ask']
                                        this.coinList[item.coin.id - 1].usdBuy = data['ask'] / this.usdArsPrice
                                    }
                                }
                            })
                        })
                    }
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
    activeButton(button: boolean) {
        this.isBuying = button
    }

    openDialog(event: SubmitEvent): void {
        event.preventDefault()

        Swal.fire({
            title: '¡Gracias por tu confianza y por elegirnos!',
            text: 'Al aceptar la compra, estás aceptando todos los términos y condiciones de nuestra plataforma.',
            icon: 'warning',
            iconColor: 'var(--yellow)',
            confirmButtonText: 'Aceptar',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            customClass: { confirmButton: 'swal-button', cancelButton: 'swal-button' }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Compra realizada con éxito!',
                    text: 'Tu saldo se actualizará en breve. ¡Gracias por confiar en nuestro servicio!',
                    icon: 'success',
                    iconColor: 'var(--green-3)',
                    confirmButtonText: 'Aceptar',
                    customClass: { confirmButton: 'swal-button' }
                }).then((result) => {
                    this.router.navigate(['/dashboard'])
                })
            }
        })
    }
}
