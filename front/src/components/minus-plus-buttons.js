class MinusPlusButtons extends HTMLElement {
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
      </style>

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
      `

    const plusbuttons = this.shadow.querySelectorAll('.plus')
    const minusbuttons = this.shadow.querySelectorAll('.minus')

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

customElements.define('minus-plus-component', MinusPlusButtons)
