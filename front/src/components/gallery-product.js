class GalleryProduct extends HTMLElement {
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
      .product-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 20px;
        font-family: 'Poppins', sans-serif;
      }

      .product {
        width: 200px;
        margin: 10px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        text-align: center;
        background-color: hsl(0, 0%, 0%, 0.7);
        color: hsl(0, 0%, 100%);
        font-weight: 200;
      }

      .product-title {
        text-align: center;
        margin: 0.5rem;
      }

      .product-description {
        display: flex;
        flex-direction: column;
        margin: 0.2rem;
        text-align: left;
      }

      .product img {
        max-width: 100%; /* Make the image responsive */
        height: auto; /* Maintain aspect ratio */
        margin-bottom: 10px;
      }
      </style>
      <div class="product-container">
        <div class="product">
          <img src="./son-sampol.webp" alt="son-sampol" title="finca son sampol">
          <div class="product-title">Evento 1</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico donde todos son felices</span>
          </div>
        </div>
        <div class="product">
          <img src="./pinceles.webp" alt="pinceles" title="evento pinceles">
          <div class="product-title">Evento 2</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product">
          <img src="./masks.webp" alt="mascaras" title="evento mascaras">
          <div class="product-title">Evento 3</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product">
          <img src="./people-drawing.webp" alt="ancianos" title="gente pintando">
          <div class="product-title">Evento 4</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product">
          <img src="./music.webp" alt="musica" title="concierto al aire libre">
          <div class="product-title">Evento 5</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
      </div>
      <div class="product-container">
        <div class="product">
          <img src="./poetry.webp" alt="poesia" title="poesia al aire libre">
          <div class="product-title">Evento 6</div>
            <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product">
          <img src="./improvisational-theatre.webp" alt="teatro" title="teatro improvisado">
          <div class="product-title">Evento 7</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product">
          <img src="./people-dancing.webp" alt="bailarines" title="evento de baile">
          <div class="product-title">Evento 8</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product">
          <img src="./open-books.webp" alt="libros" title="evento de lectura">
          <div class="product-title">Evento 9</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product">
          <img src="./masks.webp" alt="mascaras" title="evento mascaras">
          <div class="product-title">Evento 10</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
      </div>
      `
  }
}

customElements.define('gallery-products-component', GalleryProduct)
