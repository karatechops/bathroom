import styles from './styles';

const componentTag = 'bathroom-nav';

class BathroomNav extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', e =>
      console.log(e.target.getAttribute('href')),
    );
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `<nav>${this.innerHTML}</nav>
    ${styles}`;
  }
}

customElements.define(componentTag, BathroomNav);
