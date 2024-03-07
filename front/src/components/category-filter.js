class CategoryFilter extends HTMLElement {
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
    const response = await fetch('/src/data/category-filter.json')
    this.data = await response.json()
  }

  handleShowNotification (event) {
    const products = event.detail.category === 'todos' ? this.data : this.data.filter(product => product.category === event.detail.category)
    this.render(products)
  }

  render (products = this.data) {
    this.shadow.innerHTML =
      /* html */`
      <style>
        .categories {
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
      <div class="categories">

      </div>
      `

    const categories = this.shadow.querySelector('.categories')

    this.data.forEach(category => {
      const categoryContainer = document.createElement('div')
      categoryContainer.classList.add('filter-button')
      categoryContainer.dataset.category = category.category
      categories.appendChild(categoryContainer)

      const filterbutton = document.createElement('button')
      filterbutton.textContent = category.title
      categoryContainer.appendChild(filterbutton)
    })

    categories.addEventListener('click', event => {
      if (event.target.closest('.filter-button')) {
        const filter = event.target.closest('.filter-button')

        document.dispatchEvent(new CustomEvent('filter-gallery', {
          detail: {
            category: filter.dataset.category
          }
        }))
      }
    })
  }
}

customElements.define('category-filter-component', CategoryFilter)
