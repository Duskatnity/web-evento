class Menu extends HTMLElement {
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
        .menu {
          display: flex;
          align-items: right;
          gap: 2rem;
        }

        .menu-item {
          text-decoration: none;
          background-color: black;
          color: white;
          text-align: center;
          padding: 1rem;
          max-width: 5rem;
        }
      </style>
      <div class="menu">
        <div class="menu-item">Quienes somos</div>
        <div class="menu-item">Preguntas frecuentes</div>
        <div class="menu-item">Contactanos</div>
      </div>
      `
  }
}

customElements.define('menu-component', Menu)
