import styles from './styles';

const componentTag = 'bathroom-anchor';

// Shadow roots can not be passed to HTMLAnchorElement
// we use HTMLElement instead.
class BathroomAnchor extends HTMLElement {
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
    const content = this.textContent.trim();
    this.shadow.innerHTML = `<a href="${this.getAttribute('href')}">${content ||
      this.innerHTML}</a>
    ${styles}`;
  }
}

customElements.define(componentTag, BathroomAnchor);
