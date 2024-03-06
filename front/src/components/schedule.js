class Schedule extends HTMLElement {
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
      stages: [

      ],
      scheudle: [
        {
          time: '10:00',
          activities: [
            {
              title: 'Actividad 1',
              images: [

              ]
            }
          ]
        },
        {
          time: '11:00',
          activities: [
            {
              title: 'Actividad 1',
              images: [
                
              ]
            }
          ]
        }
      ] 
    }
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
      .product-gallery {
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-auto-rows: 100px;
        grid-auto-flow: row dense;
        grid-gap: 0.5rem;
        padding: 0 10%;
        margin-bottom: 1rem;
      }

      .frame-activity {
        position: relative;
        display: flex;
        grid-column: span 1;
        grid-row: span 1;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
      }

      .frame-activity img{
        position: absolute;
        height: 100%;
        object-fit: cover;
        width: 100%;
        filter: brightness(0.7);
        transition: 0.5s;
      }

      .frame-activity img:hover {
        cursor: pointer;
        filter: brightness(1);
      }

      .activity-title {
        position: absolute;
        font-family: 'Poppins', sans-serif;
        color: white;
      }

      .frame-corner {
        background-color: white;
        grid-column: span 1;
        grid-row: span 1;
      }

      .frame-blank {
        display: flex;
        background-color: hsla(150, 53%, 50%, 1);
        grid-column: span 1;
        grid-row: span 1;
        font-family: 'Poppins', sans-serif;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 2rem;
        font-weight: 600;
        margin: 1rem;
        border-radius: 1rem;
        color: white;
      }

      .frame-2x2 {
        grid-column: span 2;
        grid-row: span 2;
      }

      .frame-1x2 {
        grid-column: span 1;
        grid-row: span 2;
      }

      .frame-2x1 {
        grid-column: span 2;
        grid-row: span 1;
      }

      .frame-3x1 {
        grid-column: span 3;
        grid-row: span 1;
      }

      .frame-break {
        display: flex;
        background-color: blue;
        grid-column: span 4;
        grid-row: span 2;
        font-family: 'Poppins', sans-serif;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 4rem;
        font-weight: 600;
        color: white;
        border-radius: 1rem;
      }

      .frame-end {
        display: flex;
        background-color: red;
        grid-column: span 4;
        grid-row: span 1;
        font-family: 'Poppins', sans-serif;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 4rem;
        font-weight: 600;
        color: white;
        border-radius: 1rem;
      }
      </style>

      <div class="product-gallery">
        <div class="frame-corner"></div>
        <div class="frame-blank">Escenario 1</div>
        <div class="frame-blank">Escenario 2</div>
        <div class="frame-blank">Escenario 3</div>
        <div class="frame-blank">Escenario 4</div>
        <div class="frame-blank">10:00</div>
        <div class="frame-activity">
          <img src="./son-sampol.webp">
          <div class="activity-title">Actividad 1</div>
        </div>
        <div class="frame-activity">
          <img src="./pinceles.webp">
          <div class="activity-title">Actividad 2</div>
        </div>
        <div class="frame-activity">
          <img src="./masks.webp">
          <div class="activity-title">Actividad 3</div>
        </div>
        <div class="frame-activity">
          <img src="./music.webp">
          <div class="activity-title">Actividad 4</div>
        </div>
        <div class="frame-blank">11:00</div>
        <div class="frame-activity">
          <img src="./people-dancing.webp">
          <div class="activity-title">Actividad 5</div>
        </div>
        <div class="frame-activity">
          <img src="./people-drawing.webp">
          <div class="activity-title">Actividad 6</div>
        </div>
        <div class="frame-activity">
          <img src="./poetry.webp">
          <div class="activity-title">Actividad 7</div>
        </div>
        <div class="frame-activity">
          <img src="./improvisational-theatre.webp">
          <div class="activity-title">Actividad 8</div>
        </div>
        <div class="frame-blank">12:00</div>
        <div class="frame-break">BREAKTIME</div>
        <div class="frame-blank">13:00</div>
        <div class="frame-blank">14:00</div>
        <div class="frame-activity">
          <img src="./son-sampol.webp">
          <div class="activity-title">Actividad 9</div>
        </div>
        <div class="frame-activity">
          <img src="./son-sampol.webp">
          <div class="activity-title">Actividad 10</div>
        </div> 
        <div class="frame-activity">          
          <img src="./son-sampol.webp">
          <div class="activity-title">Actividad 11</div>
        </div>
        <div class="frame-activity">
          <img src="./son-sampol.webp">
          <div class="activity-title">Actividad 12</div>
        </div>
        <div class="frame-blank">15:00</div>
        <div class="frame-activity">
          <img src="./son-sampol.webp">
          <div class="activity-title">Actividad 13</div>
        </div>
        <div class="frame-activity">
          <img src="./son-sampol.webp">
          <div class="activity-title">Actividad 14</div>
        </div>
        <div class="frame-activity">
          <img src="./son-sampol.webp">
          <div class="activity-title">Actividad 15</div>
        </div>
        <div class="frame-activity">
          <img src="./son-sampol.webp">
          <div class="activity-title">Actividad 16</div>
        </div>
        <div class="frame-blank">16:00</div>
        <div class="frame-end">CIERRE</div>
      </div>
      `
  }
}

customElements.define('schedule-component', Schedule)
