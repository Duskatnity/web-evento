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
      
      .title {
        font-size: 5rem;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        font-weight: 600;
        margin: 2rem;
      }

      .schedule {
        font-size: 2rem;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        font-weight: 600;
        margin: 2rem;
      }

      .description {
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        text-align: center;
        margin: 2rem;
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
      <div class="title">
        TITULO
      </div>
      <div class="schedule">
        29/02/2023 | 9:00 - 16:00
      </div>
      <div class="description">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </div>
      `
  }
}

customElements.define('schedule-hero-component', ScheduleHero)
