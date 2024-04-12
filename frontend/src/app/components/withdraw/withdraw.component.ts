import { Component, Inject, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router'

import { FooterComponent } from '../footer/footer.component'
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-withdraw',
  standalone: true,
  imports: [FooterComponent, RouterModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent {
  router = inject(Router)
  logOut() {
    this.router.navigate(['/'])
  }
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



  openDialog(): void {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      html: `
      <h2 style="color: var(--yellow);">Ingrese los datos de retiro</h2>
      <div style="text-align: left; color: #ffffff;">
      <label>Ingresa CBU/CVU/Alias:</label>
      <input id="swal-input1" type="text" 
      style="background-color: white;
      color: black;
      padding: 10px 20px;
      border-radius: 1rem;
      font-size: larger;
      width:-webkit-fill-available;
      ">
      
      <label>Cuil:</label>
      <input id="swal-input2" type="number" 
      style="background-color: white;
      color: black;
      padding: 10px 20px;
      border-radius: 1rem;
      font-size: larger;
      width:-webkit-fill-available;">
     </div>
    `,
      preConfirm: () => {
        var inputValue1 = (<HTMLInputElement>document.getElementById("swal-input1")).value;
        var inputValue2 = (<HTMLInputElement>document.getElementById("swal-input2")).value;
        return [inputValue1, inputValue2];
      },
      confirmButtonText: "Aceptar",
      background:'linear-gradient(0deg, rgba(40, 118, 53, 1) 0%, rgba(23, 77, 32, 1) 100%)',
      
    }).then((result) => {
      if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
       
        html: `
        <h2 style="color: var(--yellow);">Vas a enviar dinero a:</h2>
        <h3> <span  style="color: var(--yellow);">Nombre Segundo</span> <span style="color: var(--green-3);">Apellido</span></h3>
        <div style="text-align: left; color: #ffffff;">
      <label>Alias:</label>
      <div style="background-color: white;
    color: black;
    padding: 10px 20px;
    border-radius: 1rem;
    font-size: larger;">
      <span id="alias-value">alias-value</span>
      </div>
      
      <label>Cuil:</label>
      <div style="background-color: white;
    color: black;
    padding: 10px 20px;
    border-radius: 1rem;
    font-size: larger;">
      <span id="cuil-value">cuil-value</span>
      </div>
      
      <label>Banco entidad:</label>
      <div style="background-color: white;
    color: black;
    padding: 10px 20px;
    border-radius: 1rem;
    font-size: larger;">
      <span id="entidad-value">entidad-value</span>
      </div>
      </div>
    `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
        background:'linear-gradient(0deg, rgba(40, 118, 53, 1) 0%, rgba(23, 77, 32, 1) 100%)',
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            html: `
            <h4>Al aceptar la compra, estás aceptando todos los términos y condiciones de nuestra plataforma.</h4>
            <h1 style="color: var(--yellow);">¡Gracias por tu confianza y por elegirnos!"</h1>
            <h4>Te recomendamos revisar detenidamente nuestros términos y condiciones para comprender completamente nuestros servicios y tus responsabilidades como usuario.</h4> 
            `,
            icon: "warning",
            confirmButtonText: "Aceptar",
          }).then((result) => {
            if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              icon: "success",
              html: `
              <h2 style="color:white"><span  style="color: var(--yellow);">¡Retiro realizado </span>con éxito!</h2>
              <h3 style="color:white">COMPROBANTE DE RETIRO:</h3>
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
              <label>Alias:</label>
              <div style="background-color: white;
    color: black;
    padding: 10px 20px;
    border-radius: 1rem;
    font-size: larger;">
              <span id="alias-value">alias-value</span>
              </div>
              <label>Cuil:</label>
              <div style="background-color: white;
    color: black;
    padding: 10px 20px;
    border-radius: 1rem;
    font-size: larger;">
              <span id="cuil-value">cuil-value</span>
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
              confirmButtonText: "Aceptar",
      background:'linear-gradient(0deg, rgba(40, 118, 53, 1) 0%, rgba(23, 77, 32, 1) 100%)',

            }).then((result) => {
              
        this.router.navigate(['/dashboard'])
            });
          }});
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
    }});
  }

}

export interface DialogData {
  animal: string;
  name: string;
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
    MatDialogClose,
  ],
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}