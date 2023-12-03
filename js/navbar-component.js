class NavbarComponent extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: 'open' });

    // Import and clone the template content
    const template = document.querySelector('template#navbar-component-template');
    const templateContent = template.content.cloneNode(true);
    this.shadowRoot.appendChild(templateContent);

    // Access the shadow DOM and set up any event listeners or initial behavior
    // Note: You may want to remove this line unless you have an element with the ID 'name' in your template.
    // this.shadowRoot.getElementById('name').textContent = this.getAttribute('name');
  }
}

// Define the custom element
customElements.define('navbar-component', NavbarComponent);
