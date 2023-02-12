import "./medium-avatar";
import { html, css, LitElement } from "lit";
import { sharedStyles } from "../shared/style";
import { customElement, property } from "lit/decorators.js";

const title = "10 important Stories on Medium ";
const componentStyle = css`
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    font-size: 18px;
  }
  h1 {
    font-weight: 300;
  }

  medium-avatar {
    margin-left: 15px;
  }
`;

@customElement("medium-header")
class MediumHeader extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  title!: string;

  @property()
  image!: string;

  render() {
    return html`
      <div class="header">
        <h1>${title}</h1>
        <medium-avatar image=${this.image}></medium-avatar>
      </div>
    `;
  }
}
