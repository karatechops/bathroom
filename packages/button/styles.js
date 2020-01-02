export default `
<style>
  :host {
    font-family: var(--font-stack);
    line-height: 1;
  }
  :host > a {
    display: inline-block;
    color: var(--dark-accent-1);
    font-size: 16px;
    background: var(--light-accent-1);
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 3px;
    transition: all 0.2s ease-out;
  }
  :host > a:hover {
    background: var(--light-accent-2);
    color: white;
  }
</style>`;
