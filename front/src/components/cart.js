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
        .cart-icon {
          align-items: left;
          cursor: pointer;
          flex-wrap: nowrap;
          gap: 2rem;
        }

        .cart-icon svg {
          height: 50px;
        }

        .cart {
          position: fixed;
          top: 0;
          width: 400px;
          right: -400px;
          background-color: #f0f0f0;
          height: 100vh;
          min-height: 100vh;
          transition: right 0.4s;
          z-index: 5000;
        }

        .cart.active {
          right: 0;
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
        button:active {
          background-color: var(--color-blue-300);
        }

        .close-button {
          position: absolute;
          right: 0;
          top: 0;
        }

        .close-button:hover {
          cursor: pointer;
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

      <div class="cart-icon">
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 902.86 902.86" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
      </div>
      <div class="cart">
        <div class="cart-header">
          <div class="close-button">
          X
          </div>
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
    const cartbutton = this.shadow.querySelector('.cart-icon')
    const closebutton = this.shadow.querySelector('.close-button')
    const cartslider = this.shadow.querySelector('.cart')
    const plusbuttons = this.shadow.querySelectorAll('.plus')
    const minusbuttons = this.shadow.querySelectorAll('.minus')

    cartbutton.addEventListener('click', () => {
      cartslider.classList.toggle('active')
    })

    closebutton.addEventListener('click', () => {
      cartslider.classList.remove('active')
    })

    plusbuttons.forEach((plusbutton) => {
      plusbutton.addEventListener('click', () => {
        const quantity = plusbutton.parentElement.querySelector('.quantity-selector')
        quantity.value = (parseInt(quantity.value) + 1)
      })
    })

    minusbuttons.forEach((minusbutton) => {
      minusbutton.addEventListener('click', () => {
        console.log('Funciona')
        const quantity = minusbutton.parentElement.querySelector('.quantity-selector')
        quantity.value = (parseInt(quantity.value) - 1)
      })
    })
  }
}

customElements.define('cart-component', Cart)
