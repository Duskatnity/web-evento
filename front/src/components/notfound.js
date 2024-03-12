class Error extends HTMLElement {
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
        .error-message {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 10rem;
        }

        .error-message h2 {
          font-size: 8rem;
          font-family: 'Poppins', sans-serif;
          text-align: center;
          margin: 3rem 20rem;
        }
      </style>

      <div class="error-message">
        <h2>Página no encontrada</h2>
      </div>
      `
  }
}

customElements.define('notfound-component', Error)
