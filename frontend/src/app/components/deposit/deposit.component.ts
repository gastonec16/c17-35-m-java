import { Component, inject } from '@angular/core'

import { Router, RouterModule } from '@angular/router'

import { FooterComponent } from '../footer/footer.component'
import Swal from 'sweetalert2'
import { MoneyService } from '../../services/money.service'

@Component({
    selector: 'app-deposit',
    standalone: true,
    imports: [FooterComponent, RouterModule],
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
                html: `
      <h2 style="color: var(--yellow);">Ingrese los datos de su tarjeta</h2>
      <img src="/assets/img/img-creditcard.png"  width="300px" alt=""> <br>
      <div style="text-align: left; color: #ffffff;">
      <label>Número de tarjeta:</label>
      <input id="swal-input1" type="number" 
      style="background-color: white;
      color: black;
      padding: 10px 20px;
      border-radius: 1rem;
      font-size: larger;
      width:-webkit-fill-available;
      ">

      <div style="display: flex;
              justify-content: space-between; align-items: center;">
                <div style="display: flex;
                flex-direction: column;">
                  <label>Vence el:</label>
                  <input id="swal-input2" type="number" 
                  style="background-color: white;
                  color: black;
                  padding: 10px 20px;
                  border-radius: 1rem;
                  font-size: larger;
                  width:70%;">
                  <small style="color: grey">EJEMPLO: 05-27</small>
                  </div>
                  <div style="display: flex;
                  flex-direction: column; ">
                  <label>CVV:</label>
                  <input id="swal-input3" type="number" 
                  style="background-color: white;
                  color: black;
                  padding: 10px 20px;
                  border-radius: 1rem;
                  font-size: larger;
                  width:70%;">
                  <small style="color: grey">EJEMPLO: 123</small>
                </div>

              </div>
      
      <label>Nombre del titular:</label>
      <input id="swal-input4" type="text" 
      style="background-color: white;
      color: black;
      padding: 10px 20px;
      border-radius: 1rem;
      font-size: larger;
      width:-webkit-fill-available;">
     </div>
    `,
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
                            html: `
          <h2 style="color:white"><span  style="color: var(--yellow);">¡Pago realizado </span>con éxito!</h2>
          <h3 style="color:white">COMPROBANTE DE DEPÓSITO:</h3>
          <div style="color:white; text-align:left;">
          <div style="display: flex;
          justify-content: space-between;">
            <div style="display: flex;
            flex-direction: column;">
              <label>Monto depositado:</label>
              <div style="background-color: white;
          color: black;
          padding: 10px 20px;
          border-radius: 1rem;
          font-size: larger;">
          <span>500.000</span>
          </div>
            </div>
            <div style="display: flex;
            flex-direction: column; ">
              <label>Moneda:</label>
              <div style="background-color: white;
          color: black;
          padding: 10px 20px;
          border-radius: 1rem;
          font-size: larger;">
              <span>ARS</span>
              </div>
            </div>
          </div>
          <label>Desde:</label>
          <div style="background-color: white;
          color: black;
          padding: 10px 20px;
          border-radius: 1rem;
          font-size: larger;">
          <span id="entidad-value">entidad-value</span>
          </div>
          <label>Nombre / Alias:</label>
          <div style="background-color: white;
          color: black;
          padding: 10px 20px;
          border-radius: 1rem;
          font-size: larger;">
          <span id="alias-value">alias-value</span>
          </div>
          <div style="display: flex;
          justify-content: space-between;">
            
            <div style="display: flex;
            flex-direction: column;">
              <label>Fecha:</label>
              <div style="background-color: white;
          color: black;
          padding: 10px 20px;
          border-radius: 1rem;
          font-size: larger;">
          <span>07 / 07 / 2024</span>
          </div>
            </div>
            
            <div style="display: flex;
            flex-direction: column;">
              <label>Hora:</label>
              <div style="background-color: white;
            color: black;
            padding: 10px 20px;
            border-radius: 1rem;
            font-size: larger;">
              <span>11:11 am</span>
              </div>
            </div>
              </div>
              </div>

              <h3 style="color:white">¡Gracias por confiar en nuestro servicio! </h3>
              <h4>
                  <a  style="color: var(--yellow);">Compartir comprobante. <img src="/assets/img/icon-share.png" alt="" width="24px" height="24px"></a>
              </h4>
        `,
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
