class Cart extends HTMLElement {
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
        .cart {
          position: fixed;
          top: 0;
          right: 0;
          width: 25rem;
          background-color: #f0f0f0;
          height: 100vh;
          min-height: 100vh;
          z-index: 5000;
        }

        .cart-header {
          background: hsla(252, 80%, 50%, 1);
          color: white;
          font-size: 1.25rem;
          width: auto;
          padding-left: 0.5rem;
          padding-bottom: 0.5rem;
        }

        .header-title {
          font-size: 1.5rem;
        }

        .header-description {
          font-size: 1rem;
          margin-right: 0.2rem;
        }

        .product-section {
          flex: 1;
          padding: 20px;
          box-sizing: border-box;
          border-bottom: 1px solid #ccc;
          height: 50vh;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .product-section::-webkit-scrollbar{
          background-color: white;
          width: 0.5rem;
        }

        .product-section::-webkit-scrollbar-thumb{
          background-color: hsla(252, 53%, 50%, 1);
        }

        .product {
          display: flex;
          max-height: 100%;
          margin-bottom: 1rem;
          position: relative;
          border-bottom: 1px solid #ccc;
        }

        .product-description {
          font-weight: 600;
          margin-right: 1rem;
        }

        .quantity-selector {
          width: 10%;
        }

        .quantity-selector::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .input {
          margin-top: 1rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: var(--space-12);
          height: var(--space-12);
          border: 1px solid var(--color-blue-500);
          border-radius: var(--round);
          background-color: var(--color-white);
        }
        button:hover {
          background-color: var(--color-blue-200);
          cursor: pointer;
        }
        button:focus {
          outline: none;
          box-shadow: var(--shadow-focus);
        }
        button[disabled] {
          opacity: var(--opacity-50);
          pointer-events: none;
        }
        button:active {
          background-color: var(--color-blue-300);
        }

        .remove-button{
          position: absolute;
          right: 0;
          top: 0;
        }

        .number {
          font-size: var(--text-lg);
          min-width: var(--space-12);
          text-align: center;
        }
        .icon {
          user-select: none;
        }
        .dim {
          color: var(--color-gray-400);
        }

        .product img {
          object-fit: cover;
          width: 25%;
          height: 25%;
          margin-right: 0.5rem;
        }

        .form-section {
          display: flex;
          flex-direction: column;
          padding: 20px;
          box-sizing: border-box;
          height: 50vh;
          gap: 1rem;
        }

        .form-section input {
          
        }

        .fixed-component-content {

        }

        .form-text-style {
          font-weight: 600;
          gap: 1rem;
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

      <div class="cart">
        <div class="cart-header">
          <div class="header-title">Tu horario para el evento</div>
          <div class="header-description">Dinos cuantas personas quieres apuntar para cada actividad</div>
        </div class="cart-header">
        <div class="product-section fixed-component-content">
          <div class="product">
            <img src="bags.webp" alt="Avatar">
            <div class="product-description">Taller de marionetas
              <div class="input">
                <button class="minus" aria-label="Decrease by one" disabled>
                  <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="16" y2="1" stroke="#0064FE" stroke-width="2" class="icon" />
                  </svg>
                </button>
                <input class="quantity-selector" type="number" value="1">
                <button class="plus" aria-label="Increase by one">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <line x1="8" y1="4.37114e-08" x2="8" y2="16" stroke="#0064FE" stroke-width="2" />
                    <line y1="8" x2="16" y2="8" stroke="#0064FE" stroke-width="2" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="remove-button">
              <button>X</button>
            </div>
          </div>
          <div class="product">
            <img src="bags.webp" alt="Avatar">
            <div class="product-description">Taller de pintura para niños
              <div class="input">
                <button class="minus" aria-label="Decrease by one" disabled>
                  <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="16" y2="1" stroke="#0064FE" stroke-width="2" class="icon" />
                  </svg>
                </button>
                <input class="quantity-selector" type="number" value="1">
                <button class="plus" aria-label="Increase by one">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <line x1="8" y1="4.37114e-08" x2="8" y2="16" stroke="#0064FE" stroke-width="2" />
                    <line y1="8" x2="16" y2="8" stroke="#0064FE" stroke-width="2" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="remove-button">
              <button>X</button>
            </div>
          </div>
          <div class="product">
            <img src="bags.webp" alt="Avatar">
            <div class="product-description">Charla sobre la importancia de la lectura en la infancia
              <div class="input">
                <button class="minus" aria-label="Decrease by one" disabled>
                  <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="16" y2="1" stroke="#0064FE" stroke-width="2" class="icon" />
                  </svg>
                </button>
                <input class="quantity-selector" type="number" value="1">
                <button class="plus" aria-label="Increase by one">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <line x1="8" y1="4.37114e-08" x2="8" y2="16" stroke="#0064FE" stroke-width="2" />
                    <line y1="8" x2="16" y2="8" stroke="#0064FE" stroke-width="2" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="remove-button">
              <button>X</button>
            </div>
          </div>
          <div class="product">
            <img src="bags.webp" alt="Avatar">
            <div class="product-description">Taller de marionetas
              <div class="input">
                <button class="minus" aria-label="Decrease by one" disabled>
                  <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="16" y2="1" stroke="#0064FE" stroke-width="2" class="icon" />
                  </svg>
                </button>
                <input class="quantity-selector" type="number" value="1">
                <button class="plus" aria-label="Increase by one">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <line x1="8" y1="4.37114e-08" x2="8" y2="16" stroke="#0064FE" stroke-width="2" />
                    <line y1="8" x2="16" y2="8" stroke="#0064FE" stroke-width="2" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="remove-button">
              <button>X</button>
            </div>
          </div>
          <div class="product">
            <img src="bags.webp" alt="Avatar">
            <div class="product-description">Taller de marionetas
              <div class="input">
                <button class="minus" aria-label="Decrease by one" disabled>
                  <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="16" y2="1" stroke="#0064FE" stroke-width="2" class="icon" />
                  </svg>
                </button>
                <input class="quantity-selector" type="number" value="1">
                <button class="plus" aria-label="Increase by one">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <line x1="8" y1="4.37114e-08" x2="8" y2="16" stroke="#0064FE" stroke-width="2" />
                    <line y1="8" x2="16" y2="8" stroke="#0064FE" stroke-width="2" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="remove-button">
              <button>X</button>
            </div>
          </div>
          <div class="product">
          <img src="bags.webp" alt="Avatar">
          <div class="product-description">Taller de marionetas
            <div class="input">
              <button class="minus" aria-label="Decrease by one" disabled>
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="1" x2="16" y2="1" stroke="#0064FE" stroke-width="2" class="icon" />
                </svg>
              </button>
              <input class="quantity-selector" type="number" value="1">
              <button class="plus" aria-label="Increase by one">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
                  <line x1="8" y1="4.37114e-08" x2="8" y2="16" stroke="#0064FE" stroke-width="2" />
                  <line y1="8" x2="16" y2="8" stroke="#0064FE" stroke-width="2" />
                </svg>
              </button>
            </div>
          </div>
          <div class="remove-button">
            <button>X</button>
          </div>
        </div>        
        </div>
        <div class="form-section fixed-component-content">
          <form class="form-section">
            <label class="form-text-style">Nombre</label><input type="text">
            <label class="form-text-style">Apellidos</label><input type="text">
            <label class="form-text-style">Email</label><input type="text">
            <label><input type="checkbox">Quiero recibir información sobre futuros eventos</label>
            <div class="reserve-button"><button>Reserva tu plaza</button></div>
          </form>
        </div>
      </div>
      `
  }
}

customElements.define('cart-component', Cart)
