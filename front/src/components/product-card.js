class ProductCard extends HTMLElement {
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
      .cart-button {
        display: flex;
      }
      
      .container {
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
      <div class="cart-button">
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 902.86 902.86" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
      </div>
      <div class="container">
        <div class="image">
          <img src="son-sampol.webp" alt="Your Image">
        </div>
      <div class="content">
        <div class="head-content">
          <div class="title">Título</div>
          <div class="schedule"><svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 9H21M7 3V5M17 3V5M7 13H17V17H7V13ZM6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>10:00-12:00</div>
        </div>
          <div class="description">
            <p>Descripción sobre el evento en cuestión.</p>
          </div>
          <div class="join-button"><button>Apúntate</button></div>
        </div>
      </div>
      `
  }
}

customElements.define('product-card-component', ProductCard)
