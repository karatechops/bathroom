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
    this.shadow.innerHTML = `<a href="${this.getAttribute('href')}">${
      this.textContent
    }</a>
      <style>
        :host {
          font-family: var(--font-stack);
        }
        :host > a {
          padding: 16px;
          color: var(--light-accent-1);
          font-size: 16px;
        }
        :host > a:hover {
          color: darkseagreen;
        }
      </style>`;
  }
}

customElements.define(componentTag, BathroomAnchor);
