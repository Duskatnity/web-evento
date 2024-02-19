class Logo extends HTMLElement {
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
        .logo {
          align-items: left;
          cursor: pointer;
          flex-wrap: nowrap;
          gap: 2rem;
        }

        .logo svg {
          height: 50px;
        }
      
      </style>
      <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
      </div>
      `
  }
}

customElements.define('logo-component', Logo)
