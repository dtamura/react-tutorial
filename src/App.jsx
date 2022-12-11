import React, { Component, useEffect, useRef } from "react";
import M from "materialize-css";
import Sidenav from "./Sidenav";
import Footer from "./Footer";
import "materialize-css/dist/css/materialize.min.css";
import HomePage from "./HomePage";

function App(props) {
  return (
    <div>
      <header>
        {/* タイトルバー  */}
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper ">
              <a href="/" className="brand-logo">
                <img alt="メンバーサイト" src={`${process.env.PUBLIC_URL}/title_member.png`} className="responsive-img " />
              </a>
              <a href="#!" data-target="slide-out" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </a>
            </div>
          </nav>
        </div>

        <Sidenav />
      </header>

      {/* メイン */}
      <main>
        <HomePage />
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
}

export default App;
