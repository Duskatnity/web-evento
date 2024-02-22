class ProductCart extends HTMLElement {
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
      .container {
        display: flex;
        min-height: 100vh;
      }
    
      .fixed-component {
        position: fixed;
        top: 0;
        right: 0;
        width: 20rem;
        background-color: #f0f0f0;
        height: 100vh;
      }

      .container-header {
        background: #1abc9c;
        color: white;
        font-size: 1.25rem;
        width: 20rem;
        padding-left: 0.5rem;
      }

      .header-title {
        font-size: 1.5rem;
      }

      .header-description {
        font-size: 0.75rem;
      }

      .product-section {
        flex: 1;
        padding: 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #ccc;
        height: 50vh;
      }

      .product {
        display: block;
      }

      .product img {
        align-items: left;
      }

      .form-section {
        display: flex;
        flex-direction: column;
        padding: 20px;
        box-sizing: border-box;
        height: 50vh;
        gap: 0.2rem;
      }

      .fixed-component-content {

      }

      .form-text-style {
        font-weight: 600;
      }

      .reserve-button {
        display: flex;
        justify-content: center;
      }

      .reserve-button button{
        background-color: hsla(201, 100%, 50%, 1);
        border-color: hsla(201, 100%, 50%, 1);
        color: hsla(360, 100%, 100%, 1);
        border-radius: 0.5rem;
        padding: 1rem 2rem;
        font-size: 1rem;
      }

    </style>

    <div class="container">
      <div class="fixed-component">
        <div class="container-header">
          <div class="header-title">Tu horario para el evento</div>
          <div class="header-description">Dinos cuantas personas quieres apuntar para cada actividad</div>
        </div class="container-header">
        <div class="product-section fixed-component-content">
          <div class="product">Aa</div>
          <div class="product">Bb</div>
        </div>
        <div class="form-section fixed-component-content">
          <form class="form-section">
            <label class="form-text-style">Nombre</label><input type="text">
            <label class="form-text-style">Apellidos</label><input type="text">
            <label class="form-text-style">Email</label><input type="text">
            <input type="checkbox"><label>Quiero recibir información sobre futuros eventos</label>
            <div class="reserve-button"><button>Reserva tu plaza</button></div>
          </form>
        </div>
      </div>
    </div>
      `
  }
}

customElements.define('product-cart-component', ProductCart)
