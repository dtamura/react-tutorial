export default function Footer(props) {
  return (
    <div>
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">俊友会管弦楽団</h5>
              <p className="gray-text text-lighten-4">メンバーページ</p>
            </div>

            {/* <!-- .col --> */}
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="{!! url('/') !!}">
                    ホーム
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="{!! url('/schedule') !!}">
                    練習日程
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="{!! url('/recording') !!}">
                    録音
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="{!! url('/article') !!}">
                    記事一覧
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="{!! url('/help') !!}">
                    ヘルプ
                  </a>
                </li>

                {/* 団員用 */}
                <li>
                  <a className="grey-text text-lighten-3" href="{!! url('/management') !!}">
                    運営ポータル
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="{!! url('/user') !!}">
                    メンバー一覧
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="{!! url('/utility/mail-edit') !!}">
                    一斉送信メール作成
                  </a>
                </li>

                {/* 管理者用 */}
                <li>
                  <a className="grey-text text-lighten-3" href="{!! url('/admin') !!}">
                    管理
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- .col --> */}
          </div>
          {/* <!-- .row --> */}
        </div>
        {/* <!-- .container --> */}

        <div className="footer-copyright">
          <div className="container">&copy; 2022 Shunyukai Orchestra.</div>
        </div>
      </footer>
    </div>
  );
}
