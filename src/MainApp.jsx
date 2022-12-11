import React, { useEffect } from "react";
import Sidenav from "./Sidenav";
import Footer from "./Footer";
import HomePage from "./HomePage";

export default function MainApp(props) {
  useEffect(() => {
    require("materialize-css/dist/css/materialize.min.css");
  }, []);
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
