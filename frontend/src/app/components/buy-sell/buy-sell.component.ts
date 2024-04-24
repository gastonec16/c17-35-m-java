import { Component, inject } from '@angular/core'
import { DashboardComponent } from '../dashboard/dashboard.component'
import { FormsModule } from '@angular/forms'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'
import { BuySellService } from '../../services/buy-sell.service'
import { BuyCrypto, SellCrypto } from '../../interfaces/buy-sell'
import { AppComponent } from '../../app.component'

@Component({
    selector: 'app-buy-sell',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './buy-sell.component.html',
    styleUrl: './buy-sell.component.scss'
})
export class BuySellComponent {
    appComponent = inject(AppComponent)
    router = inject(Router)
    isBuying = true
    buySellService = inject(BuySellService)

    wallet = this.appComponent.wallet
    coinList = this.appComponent.coinList

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

    activeButton(button: boolean) {
        this.isBuying = button

        this.operationBuy = {
            fiat: '',
            fiatQuantity: null,
            crypto: 0,
            cryptoQuantity: null
        }
        this.operationSell = {
            crypto: 0,
            cryptoQuantity: null,
            fiat: '',
            fiatQuantity: null
        }
        this.cryptoBuyValue = 0
        this.cryptoSellValue = 0
    }

    openDialog(event: SubmitEvent): void {
        event.preventDefault()

        Swal.fire({
            title: '¡Gracias por tu confianza y por elegirnos!',
            text: `Al aceptar la ${
                this.isBuying ? 'compra' : 'venta'
            }, estás aceptando todos los términos y condiciones de nuestra plataforma.`,
            icon: 'warning',
            iconColor: 'var(--yellow)',
            confirmButtonText: 'Aceptar',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            customClass: { confirmButton: 'swal-button', cancelButton: 'swal-button' }
        }).then((result) => {
            if (result.isConfirmed) {
                this.isBuying ? this.buyCrypto() : this.sellCrypto()
            }
        })
    }

    buyCrypto() {
        const buyCryptoDto: BuyCrypto = {
            cripto: this.coinList[this.operationBuy.crypto - 1].coin.shortName,
            quiantity: this.operationBuy.cryptoQuantity ? this.operationBuy.cryptoQuantity : 0,
            moneyType: this.operationBuy.fiat,
            quantityFiat: this.operationBuy.fiatQuantity ? this.operationBuy.fiatQuantity : 0
        }
        this.buySellService.buyCrypto(buyCryptoDto).subscribe({
            next: (data) => {
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
            },
            error: (err) => {
                Swal.fire({
                    title: 'Error',
                    text: err.error && err.error.message ? err.error.message : 'No se pudo iniciar sesión',
                    icon: 'error',
                    iconColor: 'var(--red)',
                    confirmButtonText: 'Aceptar',
                    customClass: { confirmButton: 'swal-button' }
                })
            }
        })
    }

    sellCrypto() {
        const sellCryptoDto: SellCrypto = {
            cripto: this.coinList[this.operationSell.crypto - 1].coin.shortName,
            quantityFiat: this.operationSell.fiatQuantity ? this.operationSell.fiatQuantity : 0,
            quantityCrypto: this.operationSell.cryptoQuantity ? this.operationSell.cryptoQuantity : 0,
            moneyType: this.operationSell.fiat
        }
        this.buySellService.sellCrypto(sellCryptoDto).subscribe({
            next: (data) => {
                Swal.fire({
                    title: 'Venta realizada con éxito!',
                    text: 'Tu saldo se actualizará en breve. ¡Gracias por confiar en nuestro servicio!',
                    icon: 'success',
                    iconColor: 'var(--green-3)',
                    confirmButtonText: 'Aceptar',
                    customClass: { confirmButton: 'swal-button' }
                }).then((result) => {
                    this.router.navigate(['/dashboard'])
                })
            },
            error: (err) => {
                Swal.fire({
                    title: 'Error',
                    text: err.error && err.error.message ? err.error.message : 'No se pudo iniciar sesión',
                    icon: 'error',
                    iconColor: 'var(--red)',
                    confirmButtonText: 'Aceptar',
                    customClass: { confirmButton: 'swal-button' }
                })
            }
        })
    }
}