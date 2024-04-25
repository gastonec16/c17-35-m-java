import { Component, Inject, inject } from '@angular/core'
import { Router, RouterModule } from '@angular/router'

import { FooterComponent } from '../footer/footer.component'
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
} from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import Swal from 'sweetalert2'
import { HtmlWithdraw } from './html-withdraw'
import { MoneyService } from '../../services/money.service'
import { UserService } from '../../services/user.service'
import { WalletService } from '../../services/wallet.service'
import { AppComponent } from '../../app.component'
import { WithdrawMoney } from '../../interfaces/money'

@Component({
    selector: 'app-withdraw',
    standalone: true,
    imports: [FooterComponent, FormsModule, RouterModule],
    templateUrl: './withdraw.component.html',
    styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent {
    router = inject(Router)
    money = inject(MoneyService)
    userService = inject(UserService)
    appComponent = inject(AppComponent)

    logOut() {
        this.userService.logOut()
    }
    //Franco
    wallet = this.appComponent.wallet

    //DATOS DEL FORM DE RETIRO

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
                html: HtmlWithdraw.withdrawForm,
                //RECUPERAR DATOS DEL FORM DE TARJETA
                preConfirm: () => {
                    const amount = parseFloat((<HTMLInputElement>document.getElementById('cantidad')).value)
                    var type1 = document.querySelector('#selectMoney') as HTMLSelectElement
                    const type = type1.options[type1.selectedIndex].value
                    const keyTransfer = (<HTMLInputElement>document.getElementById('swal-input1')).value

                    const cuil = (<HTMLInputElement>document.getElementById('swal-input1')).value

                    const setFiatWallet: WithdrawMoney = {
                        amount: amount,
                        type: type,
                        keyTransfer: keyTransfer,
                        cuil: cuil
                    }
                    this.money.withdraw(setFiatWallet).subscribe({ next: (data) => console.log(data, 'dasd') })
                    //if(type === 'ARS') this.wallet.ars = this.wallet.ars - amount
                    //if(type === 'USD') this.wallet.usd = this.wallet.usd - amount
                },
                confirmButtonText: 'Aceptar',
                background: 'linear-gradient(0deg, rgba(40, 118, 53, 1) 0%, rgba(23, 77, 32, 1) 100%)'
            })
            .then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons
                        .fire({
                            html: HtmlWithdraw.withdrawConfirmation,
                            focusConfirm: false,
                            showCancelButton: true,
                            confirmButtonText: 'Aceptar',
                            cancelButtonText: 'Cancelar',
                            reverseButtons: true,
                            background: 'linear-gradient(0deg, rgba(40, 118, 53, 1) 0%, rgba(23, 77, 32, 1) 100%)'
                        })

                        .then((result) => {
                            if (result.isConfirmed) {
                                swalWithBootstrapButtons
                                    .fire({
                                        icon: 'success',
                                        html: HtmlWithdraw.withdrawTicket,
                                        confirmButtonText: 'Aceptar',
                                        background:
                                            'linear-gradient(0deg, rgba(40, 118, 53, 1) 0%, rgba(23, 77, 32, 1) 100%)'
                                    })

                                    .then((result) => {
                                        this.router.navigate(['/dashboard'])
                                    })
                            }
                        })
                }
            })
    }
}

export interface DialogData {
    animal: string
    name: string
}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'dialog-overview-example-dialog.html',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose
    ]
})
export class DialogOverviewExampleDialog {
    constructor(
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close()
    }
}
