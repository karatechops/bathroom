export default `
<style>
  :host > nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-family: var(--font-stack);
    background: var(--dark-accent-2);
    padding: 16px;
  }
  :host > nav > * {
    margin-right: 16px;
  }
  :host > nav > *:last-child {
    margin-right: 0;
  }
</style>`;
