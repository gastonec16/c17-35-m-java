export class HtmlWithdraw {
    static withdrawForm = `
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
    `
    static withdrawConfirmation = `
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
        `

    static withdrawTicket = `
              <h2 style="color:white"><span  style="color: var(--yellow);">¡Retiro realizado </span>con éxito!</h2>
              <h3 style="color:white">COMPROBANTE DE RETIRO:</h3>
              <div style="color:white; text-align:left;">
              <div style="display: flex;
              justify-content: space-between;">
                <div style="display: flex;
                flex-direction: column;">
                  <label>Monto retirado:</label>
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
            `
}
