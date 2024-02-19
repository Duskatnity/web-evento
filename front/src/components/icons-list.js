class IconsList extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.orientation = this.getAttribute('orientation')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        .icons-list {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          padding: 2rem 0;
          width: 100%;

          li {
            cursor: pointer;
            display: flex;
            margin: 0 2em;
          }

          span {
            display: block;
            width: 0; 
            height: 0;
            overflow: hidden;
          }

          a {
            width: 2.5em;
            height: 2.5em;
            border-radius: 50%;
            text-decoration: none;
            color: white;
            text-align: center;
          }
        }
      </style>
    <ul class="icons-list">
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100px" height="100px"><title>account-circle</title><path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" /></svg>
          <span>Icono 1</span>
        </a>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100px" height="100px"><title>email-newsletter</title><path d="M12 .64L8.23 3H5V5L2.97 6.29C2.39 6.64 2 7.27 2 8V18C2 19.11 2.9 20 4 20H20C21.11 20 22 19.11 22 18V8C22 7.27 21.61 6.64 21.03 6.29L19 5V3H15.77M7 5H17V9.88L12 13L7 9.88M8 6V7.5H16V6M5 7.38V8.63L4 8M19 7.38L20 8L19 8.63M8 8.5V10H16V8.5Z" /></svg>
          <span>Icono 2</span>
        </a>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100px" height="100px"><title>help-circle</title><path d="M15.07,11.25L14.17,12.17C13.45,12.89 13,13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" /></svg>
          <span>Icono 3</span>
        </a>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100px" height="100px"><title>calendar</title><path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" /></svg>
          <span>Icono 4</span>
        </a>
      </li>
    </ul>
      `
  }
}

customElements.define('icons-list-component', IconsList)
