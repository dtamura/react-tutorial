import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsSignedIn } from "./authSlice";
import M from "materialize-css";
import firebase from "./firebase";

export default function Sidenav(props) {
  const nav = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    M.Sidenav.init(nav.current);
  }, []);
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
      dispatch(setIsSignedIn(!!user)); // 一番最初に呼ぶ
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, [dispatch]);

  return (
    <div>
      <ul id="slide-out" className="sidenav sidenav-fixed" ref={nav}>
        <li>
          <div className="user-view">
            <div className="background">
              <img src="{!! url(Auth::user()->background)  !!}" alt="背景画像" width="100%" />
            </div>
            <a href="#!user">
              <img className="circle" src="{!! url(Auth::user()->avatar)  !!}" alt="アバター" />
            </a>{" "}
            <a href="#!name">
              <span className="white-text name">TODO NAME さん</span>
            </a>{" "}
            <a href="#!email">
              <span className="white-text email">TODO Email</span>
            </a>
          </div>
        </li>
        <li>
          <a href="{!! url('/') !!}">
            <i className="material-icons">home</i>ホーム
          </a>
        </li>
        <li>
          <a href="{!! url('/schedule') !!}">
            <i className="material-icons">date_range</i>練習日程
          </a>
        </li>
        <li>
          <a href="{!! url('/recording') !!}">
            <i className="material-icons">audiotrack</i>録音
          </a>
        </li>
        <li>
          <a href="{!! url('/article') !!}">
            <i className="material-icons">note</i>記事一覧
          </a>
        </li>

        {/* 団員用 */}
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <span className="subheader">団員限り</span>
        </li>
        <li>
          <a href="{!! url('/management') !!}">
            <i className="material-icons">business</i>運営ポータル
          </a>
        </li>
        <li>
          <a href="{!! url('/user') !!}">
            <i className="material-icons">people</i>メンバー一覧
          </a>
        </li>
        <li>
          <a href="{!! url('/utility/mail-edit') !!}">
            <i className="material-icons">mail</i>一斉送信メール
          </a>
        </li>

        {/* 管理者向け */}
        <li>
          <a href="{!! url('/admin') !!}">
            <i className="material-icons">settings</i>管理
          </a>
        </li>

        <li>
          <div className="divider"></div>
        </li>

        {/* 団員向け */}
        <li>
          <a href="{!! url('/user/profile') !!}">
            <i className="material-icons">person</i>プロフィール編集
          </a>
        </li>

        <li>
          <a href="{!! url('/help') !!}">
            <i className="material-icons">help</i>ヘルプ
          </a>
        </li>

        {/* エキストラ向け */}
        <li>
          <a href="#!" onClick="unsubscribe();">
            <i className="material-icons">exit_to_app</i>退会申請
          </a>
        </li>

        <li>
          <a className="waves-effect" href="#!" onClick={() => firebase.auth().signOut()}>
            <i className="material-icons">exit_to_app</i>ログアウト
          </a>
        </li>
      </ul>
    </div>
  );
}
