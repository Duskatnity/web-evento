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
        padding: 1.25rem;
        font-family: 'Poppins', sans-serif;
      }

      .product-front, .product-back {
        width: 12.5rem;
        margin: 0.625rem;
        padding: 1rem;
        border: 0.1rem solid #ddd;
        border-radius: 0.3rem;
        text-align: center;
        background-color: hsl(0, 0%, 0%, 0.7);
        color: hsl(0, 0%, 100%);
        font-weight: 200;
        transition: all 0.2s ease;
        backface-visibility: hidden;
      }

      .product-front {
        background-color: black;
      }

      .product-back {
        background-color: blue;
      }

      .product-title {
        text-align: center;
        margin: 0.5rem;
        font-weight: 600;
      }

      .product-description {
        display: flex;
        flex-direction: column;
        margin: 0.2rem;
        text-align: left;
      }

      .product-front img {
        max-width: 100%;
        height: auto;
        margin-bottom: 0.625rem;
        border-radius: 0.3rem;
      }

      .product-front:hover {
        cursor: pointer;
        transform: rotateY(180deg);
        transition: all 0.3s ease;
        product-back: active;
      }

      </style>
      <div class="product-container">
        <div class="product-front">
          <img src="./son-sampol.webp" alt="son-sampol" title="finca son sampol">
          <div class="product-title">Evento 1</div>
          <div class="product-description">
            <span>Fecha: 10/03/2024</span>
            <span>Escenario: 1</span>
            <span>Presentación del espacio "Encuentro Mosaico" con actividades para todos los públicos</span>
          </div>
        </div>
        <div class="product-back">
        </div>
        <div class="product-front">
          <img src="./pinceles.webp" alt="pinceles" title="evento pinceles">
          <div class="product-title">Evento 2</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product-front">
          <img src="./masks.webp" alt="mascaras" title="evento mascaras">
          <div class="product-title">Evento 3</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product-front">
          <img src="./people-drawing.webp" alt="ancianos" title="gente pintando">
          <div class="product-title">Evento 4</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product-front">
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
        <div class="product-front">
          <img src="./poetry.webp" alt="poesia" title="poesia al aire libre">
          <div class="product-title">Evento 6</div>
            <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product-front">
          <img src="./improvisational-theatre.webp" alt="teatro" title="teatro improvisado">
          <div class="product-title">Evento 7</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product-front">
          <img src="./people-dancing.webp" alt="bailarines" title="evento de baile">
          <div class="product-title">Evento 8</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product-front">
          <img src="./open-books.webp" alt="libros" title="evento de lectura">
          <div class="product-title">Evento 9</div>
          <div class="product-description">
            <span>Fecha: Mañana</span>
            <span>Escenario: 16</span>
            <span>Es un evento NO satánico</span>
          </div>
        </div>
        <div class="product-front">
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
