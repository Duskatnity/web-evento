class CheckoutComponent extends HTMLElement {
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
        .form-section {
          display: flex;
          flex-direction: column;
          padding: 20px;
          box-sizing: border-box;
          height: 50vh;
          gap: 5px;
        }

        .form-section input {
          
        }

        .fixed-component-content {

        }

        .form-item {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        .form-text-style {
          font-weight: 600;
          gap: 1rem;
        }

        .form-text-style.error {
          color: red;
        }

        .input-form {
          margin: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .input.form.error {
          border-color: red;
        }

        .error-message {
          color: red;
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
  
      <div class="form-section fixed-component-content">
        <form class="form-section">
          <div class="form-item">
            <div class="form-label">
              <label class="form-text-style" id="name">Nombre</label>
            </div>
            <input class="input-form" type="text" name="name" data-validate="onlyLetters" data-message="Solo se admiten letras">
          </div>
          <div class="form-item">
            <div class="form-label">
              <label class="form-text-style" id="surname" >Apellidos</label>
            </div>
            <input class="input-form" type="text" name="surname" data-validate="onlyLetters" data-message="Solo se admiten letras">
          </div>
          <div class="form-item">
            <div class="form-label">
              <label class="form-text-style" id="email" >Email</label>
            </div>
            <input class="input-form" type="text" name="email" data-validate="email" data-message="Ha de ser un formato de email">
          </div>
            <label><input type="checkbox" name="newsletter" value="true">Quiero recibir información sobre futuros eventos</label>
            <div class="reserve-button"><button>Reserva tu plaza</button></div>
        </form>
      </div>
      `
    const reservebutton = this.shadow.querySelector('.reserve-button')

    reservebutton.addEventListener('click', event => {
      event.preventDefault()
      this.sendForm()
    })
  }

  async sendForm () {
    const form = this.shadow.querySelector('form')

    if (!this.validateForm(form.elements)) {
      return
    }

    const formData = new FormData(form)
    const formDataJson = Object.fromEntries(formData.entries())

    // const response = await fetch('http://localhost:3000/api/form', {
    //  method: 'POST',
    //  headers: {
    //    'Content-Type': 'application/json'
    //  },
    //  body: JSON.stringify(formDataJson)
    // })
  }

  validateForm (elements) {
    let validForm = true

    const validators = {
      onlyLetters: /^[a-zA-Z\s]+$/g,
      onlyNumbers: /\d/g,
      telephone: /^\d{9}$/g,
      email: /\w+@\w+\.\w+/g,
      web: /^(http|https):\/\/\w+\.\w+/g,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
      date: /^\d{4}-\d{2}-\d{2}$/g,
      time: /^\d{2}:\d{2}$/g
    }

    for (const element of elements) {
      if (element.dataset.validate) {
        const validator = validators[element.dataset.validate]
        const valid = element.value.match(validator)
        const labelContainer = element.closest('.form-item').querySelector('.form-label')

        const message = element.dataset.message
        const errorMessage = document.createElement('span')
        errorMessage.classList.add('error-message')
        errorMessage.textContent = message

        if (valid === null) {
          if (!labelContainer.querySelector('.error-message')) {
            labelContainer.appendChild(errorMessage)
          }
          validForm = false
        } else if (labelContainer.errorMessage === true) {
          console.log('text')
          labelContainer.removeChild(errorMessage)
        }
      }
    }

    return validForm
  }
}

customElements.define('checkout-component', CheckoutComponent)
