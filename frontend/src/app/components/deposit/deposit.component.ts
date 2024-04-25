import { Component, inject } from '@angular/core'

import { Router, RouterModule } from '@angular/router'

import { FooterComponent } from '../footer/footer.component'
import Swal from 'sweetalert2'
import { MoneyService } from '../../services/money.service'
import { FormsModule } from '@angular/forms'
import { HtmlDeposit } from './html-deposit'
import { UserService } from '../../services/user.service'
import { DepositMoney } from '../../interfaces/money'
import { AppComponent } from '../../app.component'

@Component({
    selector: 'app-deposit',
    standalone: true,
    imports: [FooterComponent, FormsModule, RouterModule],
    templateUrl: './deposit.component.html',
    styleUrl: './deposit.component.scss'
})
export class DepositComponent {
    router = inject(Router)
    moneyService = inject(MoneyService)
    userService = inject(UserService)
    appComponent = inject(AppComponent)

    ngOnInit() {
        this.appComponent.obtainWallet()
    }

    logOut() {
        this.userService.logOut()
    }

    depositMoney = {
        amount: null,
        type: ''
    }

    openDialog(event: SubmitEvent): void {
        event.preventDefault()
        const form = event.target as HTMLFormElement

        const type = (form.elements.namedItem('type') as HTMLInputElement).value
        const amount = parseFloat((form.elements.namedItem('amount') as HTMLInputElement).value)
        const paymentMethod = (form.elements.namedItem('payment-method') as HTMLInputElement).value

        if (paymentMethod === '') {
            this.appComponent.error('Por favor, ingresa un método de pago')
            return
        }

        if (paymentMethod === 'tarjeta') {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
            })
            swalWithBootstrapButtons
                .fire({
                    html: HtmlDeposit.cardData,
                    preConfirm: () => {
                        var inputValue1 = (<HTMLInputElement>document.getElementById('swal-input1')).value
                        var inputValue2 = (<HTMLInputElement>document.getElementById('swal-input2')).value
                        var inputValue3 = (<HTMLInputElement>document.getElementById('swal-input3')).value
                        var inputValue4 = (<HTMLInputElement>document.getElementById('swal-input4')).value

                        return [inputValue1, inputValue2, inputValue3, inputValue4]
                    },
                    confirmButtonText: 'Aceptar',
                    background: 'linear-gradient(0deg, rgba(40, 118, 53, 1) 0%, rgba(23, 77, 32, 1) 100%)'
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        const newDeposit: DepositMoney = { amount, type }
                        this.moneyService.deposit(newDeposit).subscribe({
                            next: (data) => {
                                swalWithBootstrapButtons
                                    .fire({
                                        icon: 'success',
                                        html: HtmlDeposit.depositTicket,
                                        confirmButtonText: 'Aceptar',
                                        background:
                                            'linear-gradient(0deg, rgba(40, 118, 53, 1) 0%, rgba(23, 77, 32, 1) 100%)'
                                    })
                                    .then((result) => {
                                        this.router.navigate(['/dashboard'])
                                    })
                            },
                            error: (err) => {
                                this.appComponent.error('No se pudo realizar el depósito', err)
                            }
                        })
                    }
                })
        } else if (paymentMethod === 'transferencia') {
            this.appComponent.error(
                'Esta opción no está disponible momentáneamente, por favor elige otro medio de pago'
            )
        } else if (paymentMethod === 'mercado-pago') {
            this.appComponent.error(
                'Esta opción no está disponible momentáneamente, por favor elige otro medio de pago'
            )
        } else if (paymentMethod === 'paypal') {
            this.appComponent.error(
                'Esta opción no está disponible momentáneamente, por favor elige otro medio de pago'
            )
        }
    }
}
