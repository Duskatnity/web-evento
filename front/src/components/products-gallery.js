class ProductsGallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    document.addEventListener('filter-gallery', this.handleFilterGallery.bind(this))
    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch('/src/data/products-gallery.json')
    this.data = await response.json()
  }

  handleFilterGallery (event) {
    const productsrelated = this.shadow.querySelectorAll('.flip-card')

    productsrelated.forEach(productrelated => {
      if (event.detail.category === 'todos') {
        productrelated.classList.remove('hidden')
      } else {
        if (productrelated.dataset.category === event.detail.category) {
          productrelated.classList.remove('hidden')
        } else {
          productrelated.classList.add('hidden')
        }
      }
    })
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
    <style>

      img{
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      .product-container {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: 300px;
        padding: 1.25rem;
        font-family: 'Poppins', sans-serif;
      }

      .flip-card {
        background-color: transparent;
        perspective: 1000px;
      }

      .flip-card.hidden{
        display: none;
      }

      .flip-card.active {
        display: flex;
      }

      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      }

      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
      }

      .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
      }

      .flip-card-front {
        background-color: #bbb;
        color: black;
      }

      .flip-card-back {
        background-color: hsla(198, 55%, 39%, 0.1);
        transform: rotateY(180deg);
      }

      .event-description {
        object-fit: contain;
      }

      .flip-card-back img {
        object-fit: contain;
        height: 100%;
        width: 45%;
        position: absolute;
        left: 0;
        top: 0;
        margin-left: 10px;
      }
    </style>
    <category-filter-component></category-filter-component>
    <div class="product-container">
    </div>
      `

    const products = this.shadow.querySelector('.product-container')

    this.data.forEach(productItem => {
      const productCard = document.createElement('div')
      productCard.classList.add('flip-card')
      productCard.dataset.category = productItem.category
      products.appendChild(productCard)

      const inner = document.createElement('div')
      inner.classList.add('flip-card-inner')
      productCard.appendChild(inner)

      const front = document.createElement('div')
      front.classList.add('flip-card-front')
      inner.appendChild(front)

      const image = document.createElement('img')
      image.setAttribute('src', productItem.image)
      front.appendChild(image)

      const back = document.createElement('div')
      back.classList.add('flip-card-back')
      inner.appendChild(back)

      const productTitle = document.createElement('h1')
      productTitle.textContent = productItem.title
      back.appendChild(productTitle)

      const description = document.createElement('p')
      description.textContent = productItem.description
      back.appendChild(description)

      const addButton = document.createElement('add-button-component')
      addButton.setAttribute('product-id', productItem.id)
      back.appendChild(addButton)
    })
  }
}

customElements.define('products-gallery-component', ProductsGallery)
