export class HtmlDeposit {
    static cardData = ` 

<h2 style="color: var(--yellow)">Ingrese los datos de su tarjeta</h2>
<img src="/assets/img/img-creditcard.png" width="300px" alt="" /> <br />
<div style="margin-top: 24px; text-align: left; color: #ffffff">
    <label style="margin-top: 24px">Número de tarjeta:</label>
    <input
        id="swal-input1"
        type="number"
        style="
            background-color: white;
            color: var(--black);
            padding: 10px 20px;
            border-radius: 1rem;
            font-size: larger;
            width: -webkit-fill-available;
            height: 16px;
        "
        placeholder="1234567890123456"
        maxlength="16"
    />

    <div style="margin: 12px 0; display: flex; justify-content: space-between; align-items: center">
        <div style="display: flex; flex-direction: column; max-height: 64px">
            <label>Vence el:</label>
            <input
                id="swal-input2"
                type="text"
                style="
                    background-color: white;
                    color: black;
                    padding: 10px 20px;
                    border-radius: 1rem;
                    font-size: larger;
                    width: 70%;
                "
                placeholder="MM/AA"
            />
        </div>
        <div style="display: flex; flex-direction: column; max-height: 64px">
            <label>CVV:</label>
            <input
            style="margin-right: 0"
                id="swal-input3"
                type="number"
                style="
                    background-color: white;
                    color: var(--black);
                    padding: 10px 20px;
                    border-radius: 1rem;
                    font-size: larger;
                    width: 70%;
                "
                placeholder="123"
                maxlength="3"
            />
        </div>
    </div>

    <label>Nombre del titular:</label>
    <input
        id="swal-input4"
        type="text"
        style="
            background-color: white;
            color: var(--black);
            padding: 10px 20px;
            border-radius: 1rem;
            font-size: larger;
            width: -webkit-fill-available;
            height: 16px;
        "
        placeholder="PÉREZ JUAN"
        maxlength="50"
        oninput="this.value = this.value.replace(/[^a-zA-Z\u00C0-\u024F]/g, '').toUpperCase()"
        required
    />
</div>

  `

    static depositTicket = `
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
`
}
