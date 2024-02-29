class CategoryFilter extends HTMLElement {
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
        .button-group {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin: 2rem;
        }

        .filter-button button{
          border: none;
          border-radius: 3rem;
          color: hsl(0, 0%, 100%);
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          padding: 1rem 2rem;
          transition: all 0.3s ease;
          background-color: hsl(0, 0%, 0%, 0.7);
        }

        .filter-button button:hover{
          background-color: hsl(204, 59%, 61%);
        }

      </style>
      <div class="button-group">
        <div class="filter-button" data-category="todos"><button>Para toda la familia</button></div>
        <div class="filter-button" data-category="jovenes"><button>Para niños</button></div>
        <div class="filter-button" data-category="adultos"><button>Para adultos</button></div>
      </div>
      `

    const filters = this.shadow.querySelectorAll('.filter-button')
    const productsrelated = this.shadow.querySelectorAll('.flip-card')

    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        console.log(filter.dataset.category)

        productsrelated.forEach(productrelated => {
          if (productrelated.dataset.category === filter.dataset.category) {
            console.log(productrelated.dataset.category)
          }
          console.log(productrelated.dataset.category)
        })
      })
    })
  }
}

customElements.define('category-filter-component', CategoryFilter)
