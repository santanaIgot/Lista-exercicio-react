import React from "react";
import Image from "./Home-image/banner.png"
import { Link } from "react-router-dom";
import './Home.css'

export default function Home() {
  return (
    <>
      <header className="container banner-container">
        <main className="box">
          <section className="image">
            <div className="image-container">
              <img src={Image} alt="" />
              <h1>Compre e ganhe um Buds2</h1>
              <Link to = "/Aparelhos" className="btn">Saiba mais</Link>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}