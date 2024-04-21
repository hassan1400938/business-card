import React from "react";

import fbIcon from "../assets/facebook-icon.svg";
import ghIcon from "../assets/github-icon.svg";
import igIcon from "../assets/instagram-icon.svg";
import ltIcon from "../assets/linktree.svg";

export default function Footer() {
  return (
    <footer>
      <div className="socialIcons">
        <a href="https://web.facebook.com/waqar119">
          <img src={fbIcon}></img>
        </a>
        <a href="https://github.com/hassan1400938/">
          <img src={ghIcon}></img>
        </a>
        <a href="https://www.instagram.com/waqarm119/">
          <img src={igIcon}></img>
        </a>
        <a href="https://linktr.ee/waqar.m">
          <img src={ltIcon}></img>
        </a>
      </div>
    </footer>
  );
}
