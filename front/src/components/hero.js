class Hero extends HTMLElement {
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
    const response = await fetch('/src/data/hero.json')
    this.data = await response.json()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          .hero{
            min-height: 100vh;
            overflow: hidden;
            position: relative;
            width: 100%;
          }

          .hero-image{
            height: 100%;
            position: absolute;
            width: 100%;
            z-index: 1000;
          }

          .hero-image img{
            height: 100%;
            object-fit: cover;
            width: 100%;
          }

          .hero-content{
            align-items: center;
            background-color: hsla(0, 0%, 0%, 0.5);
            display: flex;
            flex-direction: column;
            gap: 2rem;
            height: 100%;
            justify-content: center;
            position: absolute;
            width: 100%;
            z-index: 1001;
          }

          .hero-title h1{
            color: hsl(0, 0%, 100%);
            font-family: 'Poppins', sans-serif;
            font-size: 4rem;
            font-weight: 600;
            line-height: 1.2;
            margin: 0;
            text-align: center;
            text-transform: capitalize;
          }

          .hero-description p{
            color: hsl(0, 0%, 100%);
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            font-weight: 400;
            margin: 0;
            text-align: center;
          }

          .hero-button button{
            background-color: hsl(204, 59%, 51%);
            border: none;
            border-radius: 1rem;
            color: hsl(0, 0%, 100%);
            cursor: pointer;
            font-family: 'Poppins', sans-serif;
            font-size: 1.5rem;
            font-weight: 600;
            padding: 1rem 2rem;
            transition: all 0.3s ease;
          }

          @media (hover: hover) {
            .hero-button button:hover{
              background-color: hsl(204, 59%, 61%);
            }
          }

          @media (min-width: 601px) {
            .hero-title h1{
              font-size: 4rem;
              line-height: 1;
            }

            .hero-description p{
              font-size: 1.5rem;
            }
          }

          @media (min-width: 601px) and (orientation: landscape) {
            .hero-title h1{
              font-size: 5rem;
              line-height: 1;
            }

            .hero-description p{
              font-size: 2rem;
            }
          }

          @media (min-width: 1025px) and (max-width: 1920px) {
            .hero-content{
              gap: 3rem;
            }

            .hero-title h1{
              font-size: 7rem;
              line-height: 1;
            }

            .hero-description p{
              font-size: 3rem;
            }
          }

          @media (min-width: 1920px) {

          }
        </style>

        <div class="hero">
          <div class="hero-image">
            <picture>
              <source srcset="${this.data.images.lg.src}" type="image/webp" media="(min-width: 1200px)">
              <source srcset="${this.data.images.md.src}" type="image/webp" media="(min-width: 992px)">
              <source srcset="${this.data.images.sm.src}" type="image/webp" media="(min-width: 601px)">
              <source srcset="${this.data.images.xs.src}" type="image/webp" media="(max-width: 600px)">
              <img src="${this.data.images.lg.src}" alt="${this.data.images.alt}" title="${this.data.images.title}">
            </picture>
          </div>
          <div class="hero-content">
            <div class="hero-title">
              <h1>${this.data.title}</h1>
            </div>
            <div class="hero-description">
              <p>${this.data.description}</p>
            </div>
            <div class="hero-button">
              <a href="${this.data.buttonLink}">
                <button>${this.data.buttonText}</button>
              </a>
            </div>
          </div>
        </div>
      `
  }
}

customElements.define('hero-component', Hero)
