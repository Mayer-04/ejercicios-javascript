/*
* Web Components
Permiten crear componentes reutilizables y encapsulados que se pueden usar en aplicaciones web. 
- Construir elementos HTML personalizados que funcionan como cualquier otro elemento estándar del DOM.
- Puedes crear una clase que extienda HTMLElement y luego registrarla con customElements.define().
*/

class MyElement extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
            <style>
                h1 {
                    color: red;
                }
            </style>
            <h1>Hola, soy un elemento web customizado</h1>
        `;
  }
}

customElements.define("my-element", MyElement);
