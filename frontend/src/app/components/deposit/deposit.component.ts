import { Component, inject } from '@angular/core'

import { Router, RouterModule } from '@angular/router'

import { FooterComponent } from '../footer/footer.component'
import Swal from 'sweetalert2'
import { MoneyService } from '../../services/money.service'
import { FormsModule } from '@angular/forms'
import { HtmlDeposit } from './html-deposit'

@Component({
    selector: 'app-deposit',
    standalone: true,
    imports: [FooterComponent, FormsModule, RouterModule],
    templateUrl: './deposit.component.html',
    styleUrl: './deposit.component.scss'
})
export class DepositComponent {
    router = inject(Router)
    money = inject(MoneyService)

    logOut() {
        this.router.navigate(['/'])
    }

    openDialog(): void {
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
                    swalWithBootstrapButtons
                        .fire({
                            icon: 'success',
                            html: HtmlDeposit.depositTicket,
                            confirmButtonText: 'Aceptar',
                            background: 'linear-gradient(0deg, rgba(40, 118, 53, 1) 0%, rgba(23, 77, 32, 1) 100%)'
                        })
                        .then((result) => {
                            this.router.navigate(['/dashboard'])
                        })
                }
            })
    }
}
