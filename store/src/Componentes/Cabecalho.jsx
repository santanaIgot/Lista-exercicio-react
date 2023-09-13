import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo/logo.png";
import './Cabecalho.css'

export default function Cabecalho() {
  return (
    <>
      <header className="cabecalho cabecalho-container">
        <div class="logo logo-container">
          <img src={Logo} alt="" />
        </div>
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/Aparelhos">Aparelhos</Link>
        </nav>
      </header>
    </>
  );
}