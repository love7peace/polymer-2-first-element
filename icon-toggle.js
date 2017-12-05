import {Element as PolymerElement} from "../node_modules/@polymer/polymer/polymer-element.js"
import "../node_modules/@polymer/iron-icon/iron-icon.js"

//export const html = Polymer.html;

export const html = (strings, ...values) => strings[0]
+ values.map((v, i) => v + strings[i+1]).join('');

class IconToggle extends PolymerElement {
  
  constructor() {
    super();
  }

  static get template () {
    return html`
      <style>
        /* shadow DOM styles go here */
        :host {
          display: inline-block;
        }
      </style>

      <!-- shadow DOM goes here -->
      <span>Not much here yet.</span>
    `
  }
}

customElements.define('icon-toggle', IconToggle);