class Menu extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    this.data = [
      {
        link: '/',
        title: 'Inicio'
      },
      {
        link: '/landing.html',
        title: 'Horarios'
      },
      {
        link: '/about.html',
        title: 'Quienes somos'
      }
    ]
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
          color: white;
          text-align: center;
          padding: 1rem;
          max-width: auto;
          font-family: 'Poppins', sans-serif;
        }

        .menu-item:hover {
          cursor: pointer;
          transition: 0.5s;
        }

        .menu-item a{
          color: black;
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
        }

      </style>
      <div class="menu"></div>
      `

    const menu = this.shadow.querySelector('.menu')

    this.data.forEach(menuItem => {
      const menuItemContainer = document.createElement('div')
      menuItemContainer.classList.add('menu-item')
      menu.appendChild(menuItemContainer)

      const link = document.createElement('a')
      link.setAttribute('href', menuItem.link)
      link.textContent = menuItem.title
      menuItemContainer.appendChild(link)
    })
  }
}

customElements.define('menu-component', Menu)
