import { html, css, LitElement } from "lit";
import { sharedStyles } from "../shared/style";
import { customElement, property } from "lit/decorators.js";
const image =
  "https://avatars.githubusercontent.com/u/96339871?s=400&u=f7874654263ff91471c01530ac1f10ba22104531&v=4";

const componentStyle = css`
  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    box-shadow: 0px 13px 10px -7px rgb(0 0 0 / 10%);
  }
`;

@customElement("medium-avatar")
class MediumAvatar extends LitElement {
  static styles = [sharedStyles, componentStyle];

  @property()
  image!: string;

  render() {
    return html` <img class="avatar" src="${image}" /> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "medium-avatar": MediumAvatar;
  }
}
