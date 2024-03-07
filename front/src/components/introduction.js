class Introduction extends HTMLElement {
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
    const response = await fetch('/src/data/introduction.json')
    this.data = await response.json()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
    <style>
      .intro{
        min-height: 100vh;
        overflow: hidden;
        position: relative;
        width: 100%;
      }

      .intro-image{
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 1000;
      }

      .intro-image img{
        height: 100%;
        object-fit: cover;
        width: 100%;
      }

      .intro-content{
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

      .intro-title h1{
        color: hsl(0, 0%, 100%);
        font-family: 'Poppins', sans-serif;
        font-size: 4rem;
        font-weight: 600;
        line-height: 1.2;
        margin: 0;
        text-align: center;
        text-transform: capitalize;
      }

      .intro-description p{
        color: hsl(0, 0%, 100%);
        font-family: 'Poppins', sans-serif;
        font-size: 1.25rem;
        font-weight: 400;
        margin: 0;
        margin: 1rem;
        text-align: left;
      }

    </style>

    <div class="intro">
      <div class="intro-image">
        <picture>
          <source srcset=${this.data.images.xs.src} type="image/webp" media="(max-width: 600px)">
          <source srcset=${this.data.images.lg.src} type="image/webp" media="(min-width: 601px)">
          <img src="./public/son-sampol.webp" alt="son-sampol" title="finca son sampol">
        </picture>
      </div>
      <div class="intro-content">
        <div class="intro-title">
          <h1>${this.data.title}</h1>
        </div>
        <div class="intro-description">
          <p>${this.data.description}</p>
        </div>
      </div>
    </div>

      `
  }
}

customElements.define('introduction-component', Introduction)
