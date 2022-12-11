import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './authSlice'


export default function HomePage(props) {

  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const nextSchedule = {
    typeName: "全奏",
    date: "12/24",
    day: "日",
    startTime: "09:00",
    endTime: "17:00",
    period: "終日",
    place: "場所",
  };
  const lastSchedule = {
    typeName: "全奏",
    date: "12/24",
    day: "日",
    startTime: "09:00",
    endTime: "17:00",
    period: "終日",
    place: "場所",
    recordingsCount: 7,
  };
  return (
    <div>
      <div className="container">
        <h3>ホーム</h3>

        <h4>こんにちは、TODO NAME さん</h4>

        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <h3>{count}</h3>

        <div className="row">
          {/* 次の練習 */}
          <div className="col s12 m6">
            <div className="card orange darken-1">
              <div className="card-content white-text">
                <span className="card-title">次の練習</span>

                <div className="collection">
                  {/* ヒットした場合 */}
                  <a className="collection-item avatar" href="{!! url('schedule/detail').'/'.$nextSchedule->id !!}">
                    <span className="title">
                      {nextSchedule.date} {nextSchedule.typeName}
                    </span>
                    <img src="{{ asset($nextSchedule->type->icon_url) }}" alt="タイプ" className="circle" />
                    <p className="black-text">
                      {nextSchedule.date} ({nextSchedule.day}){nextSchedule.period}
                      {/* <span className="grey-text">開始時刻未定</span> */}
                      {nextSchedule.startTime}-{/* <span className="grey-text">終了時刻未定</span> */}
                      {nextSchedule.endTime}
                      <br />
                      {/* <span className="grey-text">場所未定</span> */}
                      {nextSchedule.place}
                    </p>
                  </a>
                  {/* nullの場合 */}
                  {/* <p>登録されていません</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* 前回の練習 */}
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">前回の練習</span>

                <div className="collection">
                  <a className="collection-item avatar" href="{!! url('schedule/detail').'/'.$lastSchedule->id !!}">
                    <span className="title">
                      {nextSchedule.date} {nextSchedule.typeName}
                    </span>
                    {/* アップロード済バッチ */}
                    <span className="new badge" data-badge-caption="files uploaded">
                      {lastSchedule.recordingsCount}
                    </span>
                    <img src="{{ asset($lastSchedule->type->icon_url) }}" alt="タイプ" className="circle" />
                    <p className="black-text">
                      {lastSchedule.date} ({lastSchedule.day}){lastSchedule.period}
                      {/* <span className="grey-text">開始時刻未定</span> */}
                      {lastSchedule.startTime}-{/* <span className="grey-text">終了時刻未定</span> */}
                      {lastSchedule.endTime}
                      <br />
                      {/* <span className="grey-text">場所未定</span> */}
                      {lastSchedule.place}
                    </p>
                  </a>
                  {/* Nullの場合 */}
                  {/* <p>登録されていません</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/*  おしらせ */}
          <div className="col s12">
            <div className="card darken-1">
              <div className="card-content">
                <span className="card-title">お知らせ</span>
                <h5>各種ダウンロード</h5>
                <table>
                  <thead>
                    <tr>
                      <th>資料</th>
                      <th>ダウンロード</th>
                      <th>備考</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
