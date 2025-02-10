import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {
  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = 'Card Title';
    this.image = 'https://via.placeholder.com/300x200';
    this.description = 'This is a card description.';
    this.buttonText = 'Learn More';
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        width: 300px;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
      .card-content {
        padding: 16px;
      }
      h2 {
        margin: 0 0 8px;
        font-size: 1.2em;
      }
      p {
        margin: 0 0 16px;
      }
      button {
        background-color: #0077cc;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
      }
      button:hover {
        background-color: #005fa3;
      }
    `;
  }

  render() {
    return html`
      <img class="card-image" src="${this.image}" alt="${this.title}">
      <div class="card-content">
        <h2>${this.title}</h2>
        <p>${this.description}</p>
        <button>${this.buttonText}</button>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      buttonText: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
