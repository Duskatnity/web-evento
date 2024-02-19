class Form extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
      .form-groups {
        margin: 4rem;
        gap: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .form-item {
        display: flex;
        align-items: center;
      }

      .checkbox-confirm {
        margin-top: 1rem;
        text-align: center;
      }

      .names-inputs {
        margin: 4rem;
        gap: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
      }

      .input-email {
        text-align: center;
      }

      </style>


      <form>
        <div class="form-groups">
          <div>
            <div class="form-item"><input type="checkbox"><label>Escenario 1</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 2</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 3</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 4</label></div>
          </div>
          <div>
            <div class="form-item"><input type="checkbox"><label>Escenario 5</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 6</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 7</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 8</label></div>
          </div>
          <div>
            <div class="form-item"><input type="checkbox"><label>Escenario 9</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 10</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 11</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 12</label></div>
          </div>
          <div>
            <div class="form-item"><input type="checkbox"><label>Escenario 13</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 14</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 15</label></div>
            <div class="form-item"><input type="checkbox"><label>Escenario 16</label></div>
          </div>
        </div>
        <div class="checkbox-confirm"><input type="checkbox"><label>¿Quieres venir a comer con nosotros?</label></div>
        <div class="names-inputs">
          <div><label>Nombre </label><input type="text"></div>
          <div><label>Apellidos </label><input type="text"> </div>
        </div>
        <div class="input-email"><label>Email</label><input type="text"></div>
      </form>
      `
  }
}

customElements.define('form-component', Form)
