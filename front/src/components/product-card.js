class ProductCard extends HTMLElement {
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
    this.data = {
      title: 'Titulo',
      description: 'Descripcion del evento en cuestión',
      image: 'son-sampol.webp',
      schedule: '10:00-12:00'
    }
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
      .cart-button {
        display: flex;
      }
      
      .product {
        box-sizing: border-box;
        display: flex;
        height: 100vh;
        width: 100%;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 2rem;
      }

      .image, .content {
        flex: 1;
      }

      .image img {
        object-fit: cover;
        width: 100%;
        height: auto;
        display: block;
      }

      .content {
        padding: 20px;
        display: flex;
        flex-direction: column;
      }

      .head-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 48px;
      }

      .title {
        margin-bottom: 20px;
        font-weight: 600;
      }

      .schedule {
        font-size: 30px;
      }

      .schedule svg {
        width: 30px;
        height: 30px;
        fill: none;
      }

      .description {
        margin-top: 20px;
      }

      .join-button {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin: 2rem;
      }

      .join-button button{
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
        width: 100%;
      }

      .join-button button:hover{
        background-color: hsl(204, 59%, 61%);
      }

      </style>
        <div class="product">
          <div class="image">
            <img src=${this.data.image} alt="Your Image">
          </div>
          <div class="content">
            <div class="head-content">
              <div class="title">${this.data.title}</div>
              <div class="schedule"><svg><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M7 3V5M17 3V5M7 13H17V17H7V13ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>${this.data.schedule}</div>
            </div>
            <div class="description">
              <p>${this.data.description}</p>
            </div>
            <div class="join-button"><button>Apúntate</button></div>
          </div>
        </div>
      `
  }
}

customElements.define('product-card-component', ProductCard)
