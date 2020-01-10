export default `
<style>
  :host > nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: var(--font-stack);
    background: var(--dark-accent-2);
    padding: 16px;
  }
  .bathroom-nav-logo {
    display: flex;
  }
  .bathroom-nav-logo img {
    max-height: 30px;
    width: auto;
    padding-right: 16px;
  }
  .bathroom-nav-logo span {
    font-size: 25px;
  }
  ::slotted(*) {
    padding-right: 15px;
  }
  ::slotted(*:last-child) {
    padding-right: 0;
  }
</style>`;
