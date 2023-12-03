class FooterComponent extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: 'open' });

    // Import and clone the template content
    const template = document.getElementById('footer-component');
    const templateContent = template.content.cloneNode(true);
    this.shadowRoot.appendChild(templateContent);

    // Access the shadow DOM and set up any event listeners or initial behavior
    this.shadowRoot.getElementById('name').textContent = this.getAttribute('name');
  }
}

// Define the custom element
customElements.define('footer-component', FooterComponent);
