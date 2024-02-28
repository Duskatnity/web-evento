class ScheduleHero extends HTMLElement {
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
      .hero{
        min-height: 60vh;
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
      
      .title {
        font-size: 5rem;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        font-weight: 600;
        margin: 2rem;
      }

      .description {
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        margin: 3rem 20rem;
      }
      </style>

      <div class="hero">
        <div class="hero-image">
          <picture>
            <source srcset="./public/son-sampol-mobile.webp" type="image/webp" media="(max-width: 600px)">
            <source srcset="./public/son-sampol.webp" type="image/webp" media="(min-width: 601px)">
            <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
          </picture>
        </div>
      </div>
      `
  }
}

customElements.define('schedule-hero-component', ScheduleHero)
