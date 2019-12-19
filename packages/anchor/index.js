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

      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format('woff');
      }
      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Bold.woff") format('woff');
        font-weight: 700;
      }
      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Semibold.woff") format('woff');
        font-weight: 600;
      }
      @font-face {
        font-family: "Metric";
        src: url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Light.woff") format('woff');
        font-weight: 100;
      }
        :host {
          font-family: 'Metric', Arial, sans-serif;
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
