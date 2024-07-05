import React from "react";
import pImage from "/profile-img.png";

export default function Header() {
  return <header style={{ backgroundImage: "url(" + pImage + ")" }}></header>;
}
