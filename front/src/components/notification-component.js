class NotificationComponent extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('message', event => {
      const notification = this.shadow.querySelector('.notification-box')

      notification.classList.add('active')
      notification.innerHTML = event.detail.text

      setTimeout(() => {
        notification.classList.remove('active')
      }, 5000)
    })

    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
    <style>
      .notification-box {
        position: fixed;
        bottom: 40px;
        right: 40px;
        background-color: #4CAF50;
        color: #fff;
        padding: 40px;
        height: 5vh;
        width: 20vh;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        font-size: 1.2rem;
        text-align: center;
        opacity: 0;
        transition: opacity 0.5s;
      }

      .notification-box.active {
        opacity: 1;
        z-index: 5000;
      }
    </style>

    <div class="notification-box"></div>
      `
  }
}

customElements.define('notification-component', NotificationComponent)
