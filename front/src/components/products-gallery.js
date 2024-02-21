class ProductsGallery extends HTMLElement {
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
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        justify-content: space-around;
        padding: 1.25rem;
        font-family: 'Poppins', sans-serif;
      }

      .flip-card {
        background-color: transparent;
        width: 300px;
        height: 300px;
        perspective: 1000px;
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
        background-color: #2980b9;
        color: white;
        transform: rotateY(180deg);
      }
    </style>
    <div class="product-container">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="son-sampol.webp" alt="son sampol" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
            <add-button-component></add-button-component>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="masks.webp" alt="mascaras" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
            <add-button-component></add-button-component>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="music.webp" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
            <add-button-component></add-button-component>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="open-books.webp" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
            <add-button-component></add-button-component>
          </div>
        </div>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="people-dancing.webp" alt="Avatar" style="width:300px;height:300px;">
          </div>
          <div class="flip-card-back">
            <h1>John Doe</h1> 
            <p>Architect & Engineer</p> 
            <p>We love that guy</p>
            <add-button-component></add-button-component>
          </div>
        </div>
      </div>
    </div>
    <div class="product-container">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="people-drawing.webp" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>
          <add-button-component></add-button-component>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="pinceles.webp" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>
          <add-button-component></add-button-component>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="poetry.webp" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>
          <add-button-component></add-button-component>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="improvisational-theatre.webp" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>
          <add-button-component></add-button-component>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
        </div>
        <div class="flip-card-back">
          <h1>John Doe</h1> 
          <p>Architect & Engineer</p> 
          <p>We love that guy</p>
          <add-button-component></add-button-component>
        </div>
      </div>
    </div>
  </div>
  </div>

      `
  }
}

customElements.define('products-gallery-component', ProductsGallery)
