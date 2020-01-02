export default `
<style>
  :host {
    font-family: var(--font-stack);
    line-height: 1;
  }
  :host > a {
    color: var(--dark-accent-1);
    font-size: 16px;
    background: var(--light-accent-1);
    padding: 8px 16px;
    border-radius: 3px;
    transition: all 0.2s ease-out;
  }
  :host > a:hover {
    background: var(--dark-accent-1);
    color: var(--light-accent-1);
  }
</style>`;
