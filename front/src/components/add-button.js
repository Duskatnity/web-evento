import { store } from '../redux/store.js'
import { addProduct, removeProduct } from '../redux/cart-slice.js'

class AddButton extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
    this.unsubscribe = null
  }

  async connectedCallback () {
    this.productId = this.getAttribute('product-id')

    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        button:focus {
          outline: 0;
        }

        .sf-btn * {
          box-sizing: border-box;
        }
        .sf-btn {
          margin: auto;
          display: block;
          background-color: #61a0ea;
          border-radius: 50px;
          width: 40px;
          height: 40px;
          border-outline: none;
          border: none;
          padding: 0;
          position: relative;
        }
        .sf-btn.add {
          background-color: transparent;
          border: 2px solid #c8c8c8;
        }

        .sf-btn.active {
          background-color: #4574bc;
          border: none;
        }

        .sf-btn.loading {
          background-color: #fff;
          border: none;
        }

        .icn-sf {
          width: 100%;
          height: 100%;
          position: relative;
          display: block;
          border: none;
          border-radius: 100px;
          padding: 2px 6px 3px;
        }
        .loading .icn-sf:not(.line) {
          background-color: #4574bc;
        }
        .active .loader {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          border-radius: 100px;
          border-left: 3px solid #5dba9d;
          border-bottom: 3px solid transparent;
          border-right: 3px solid transparent;
          border-top: 3px solid transparent;
          animation: rotation linear 1s;
          animation-fill-mode: forwards;
        }

        .line {
          display: block;
          background: #ecf0f1;
          width: 90%;
          height: 3px;
          position: absolute;
          left: 5%;
          border-radius: 4px;
          transition: all 0.4s;
        }

        .add .line {
          width: 60%;
          left: 20%;
          background-color: #c8c8c8;
        }

        .add .line-1 {
          top: 50%;
          margin-top: -2px;
        }
        .add .line-2 {
          transform: translateX(0) rotate(90deg);
          top: 50%;
          margin-top: -2px;
        }

        .active .line {
          left: 5%;
          background-color: #fff;
        }

        .sf-btn.active .line-1 {
          transform: translateX(47%) rotate(45deg);
          top: 63%;
          width: 30%;
        }

        .sf-btn.active .line-2 {
          transform: translateX(50%) rotate(-55deg);
          top: 52%;
          width: 55%;
        }

        @keyframes rotation {
          0% {
            transform: rotate(0);
          }
          100% {
            display: none;
            transform: rotate(360deg);
          }
        }

        @media (hover: hover) {
        .sf-btn:hover{
          cursor: pointer;
        }
      </style>

      <button type="submit" class="sf-btn add">
        <div class="icn-sf">
          <span class="line line-1"></span>
          <span class="line line-2"></span>
        </div>
        <div class="loader"></div>
      </button>

      `

    const button = this.shadow.querySelector('button')

    button.addEventListener('click', () => {
      if (button.classList.contains('active')) {
        button.classList.remove('active')
        this.removeElement()
      } else {
        button.classList.add('active')
        this.addElement()
      }
    })
  }

  addElement () {
    const product = {
      id: this.productId,
      quantity: 1
    }

    store.dispatch(addProduct(product))

    document.dispatchEvent(new CustomEvent('message', {
      detail: {
        text: 'Se ha añadido la actividad al carrito'
      }
    }))
  }

  removeElement () {
    document.dispatchEvent(new CustomEvent('message', {
      detail: {
        text: 'Se ha removido la actividad al carrito'
      }
    }))
  }
}

customElements.define('add-button-component', AddButton)
