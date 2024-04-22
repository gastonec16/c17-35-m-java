import { Component, inject } from '@angular/core'
import Swal from 'sweetalert2'
import { CryptoService } from '../../services/crypto.service'
import { DashboardComponent } from '../dashboard/dashboard.component'
import { UserService } from '../../services/user.service'

@Component({
    selector: 'app-all-crypto',
    standalone: true,
    imports: [],
    templateUrl: './all-crypto.component.html',
    styleUrl: './all-crypto.component.scss'
})
export class AllCryptoComponent {
    cryptoService = inject(CryptoService)
    dashboardComponent = inject(DashboardComponent)

    coinList = this.dashboardComponent.coinList

    ngOnInit() {
        this.cryptoService.getCryptoPrices(this.coinList)
    }

    refresh() {
        this.cryptoService.getCryptoPrices(this.coinList)
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
}
