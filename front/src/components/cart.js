import { store } from '../redux/store.js'
import { addProduct, removeProduct } from '../redux/cart-slice.js'

class Cart extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
    this.unsubscribe = null
  }

  async connectedCallback () {
    this.productId = this.getAttribute('product-id')
    this.unsubscribe = store.subscribe(() => {
      const currentState = store.getState()

      if (currentState.cart.cartProducts.length > this.data.length) {
        currentState.cart.cartProducts.forEach(async product => {
          const cartProduct = this.data.some(cartProduct => cartProduct.id === product.id)

          if (!cartProduct) {
            await this.addProduct(product.id)
          }
        })
      }

      if (currentState.cart.cartProducts.length < this.data.length) {
        this.data.forEach(async product => {
          const cartProduct = currentState.cart.cartProducts.some(cartProduct => cartProduct.id === product.id)

          if (!cartProduct) {
            this.data = this.data.filter(cartProduct => cartProduct.id !== product.id)
            this.render()
          }
        })
      }
    })
    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch('/src/data/cart.json')
    this.data = await response.json()
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
          font-family: 'Poppins', sans-serif;
          width: auto;
          padding-left: 0.5rem;
          padding-bottom: 0.5rem;
        }

        .header-title {
          font-size: 1.5rem;
          font-weight: 600;
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

        .notification {
          display: flex;
          font-size: 3rem;
          text-align: center;
          font-family: 'Poppins', sans-serif;
        }

        .notification p {
          display: flex;
          text-align: center;
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

        .close-button {
          position: absolute;
          right: 0;
          top: 0;
          margin-right: 1rem;
          font-size: 1.5rem;
          font-weight: 600;
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
          <svg height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 26 26" xml:space="preserve" fill="#4219e6" stroke="#4219e6"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#ffffff;" d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25 C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0 L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467 L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468 c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467 C19.033,16.725,19.033,17.138,18.78,17.394z"></path> </g> </g></svg>
          </div>
          <div class="header-title">Tu horario para el evento</div>
          <div class="header-description">Dinos cuantas personas quieres apuntar para cada actividad</div>
        </div class="cart-header">
        <div class="product-section fixed-component-content"></div>
      </div>
      `
    const cartbutton = this.shadow.querySelector('.cart-icon')
    const closebutton = this.shadow.querySelector('.close-button')
    const cartslider = this.shadow.querySelector('.cart')
    const cartproducts = this.shadow.querySelector('.product-section')

    cartbutton.addEventListener('click', () => {
      cartslider.classList.toggle('active')
    })

    closebutton.addEventListener('click', () => {
      cartslider.classList.remove('active')
    })

    if (this.data.length > 0) {
      const checkoutForm = document.createElement('checkout-component')
      cartslider.appendChild(checkoutForm)
    }

    if (this.data.length === 0) {
      const notificationLength = document.createElement('p')
      notificationLength.classList.add('notification')
      notificationLength.textContent = 'No hay productos añadidos al carrito'
      cartproducts.appendChild(notificationLength)
    }

    cartslider.addEventListener('click', event => {
      if (event.target.closest('.remove-button')) {
        const removeButton = event.target.closest('.remove-button')
        const productId = removeButton.dataset.id
        this.removeProduct(productId)
      }
    })

    this.data.forEach(productItem => {
      const cartItem = document.createElement('div')
      cartItem.classList.add('product')
      cartproducts.appendChild(cartItem)

      const productImage = document.createElement('img')
      productImage.setAttribute('src', productItem.image)
      cartItem.appendChild(productImage)

      const productName = document.createElement('div')
      productName.classList.add('product-description')
      productName.textContent = productItem.name
      cartItem.appendChild(productName)

      const minusplusButtons = document.createElement('minus-plus-component')
      minusplusButtons.setAttribute('product-id', productItem.id)
      minusplusButtons.setAttribute('quantity', productItem.quantity)
      productName.appendChild(minusplusButtons)

      const removeButton = document.createElement('div')
      removeButton.classList.add('remove-button')
      removeButton.dataset.id = productItem.id
      cartItem.appendChild(removeButton)

      const removeIcon = document.createElement('button')
      removeIcon.textContent = 'X'
      removeButton.appendChild(removeIcon)
    })
  }

  async sendForm () {
    const form = this.shadow.querySelector('form')
    const formData = new FormData(form)
    const formDataJson = Object.fromEntries(formData.entries())

    console.log(formDataJson)

    // const response = await fetch('http://localhost:3000/api/form', {
    //  method: 'POST',
    //  headers: {
    //    'Content-Type': 'application/json'
    //  },
    //  body: JSON.stringify(formDataJson)
    // })
  }

  async addProduct (id) {
    const response = await fetch(`/src/data/products/${id}.json`)
    const product = await response.json()
    this.data.push(product)

    this.render()
  }

  async removeProduct (id) {
    this.data = this.data.filter(product => product.id !== id)

    store.dispatch(removeProduct({ id }))
    this.render()
  }
}

customElements.define('cart-component', Cart)
