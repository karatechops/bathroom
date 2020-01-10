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
    const title = this.getAttribute('title');
    const logoSrc = this.getAttribute('logo');
    this.shadow.innerHTML = `
    ${styles}
    <nav>
      <div class="${componentTag}-logo">
        <img src="${logoSrc}" alt="${title}" />
        <span>${title}</span>
      </div>
      <div class="${componentTag}-links">
        <slot></slot>
      </div>
    </nav>
    `;
  }
}

customElements.define(componentTag, BathroomNav);
