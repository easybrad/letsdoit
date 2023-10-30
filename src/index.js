import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const App = () => (
  <div className="logs">
    {/* 日志项容器 */}
    <div className="item">
      <div className="date">
        <div className="month">四月</div>
        <div className="day">10</div>
      </div>
      <div className="content">
        <h2 className="desc">学习 React</h2>
        <div className="time">40分钟</div>
      </div>
    </div>
    <div className="item">
      <div className="date">
        <div className="month">四月</div>
        <div className="day">10</div>
      </div>
      <div className="content">
        <h2 className="desc">学习 React</h2>
        <div className="time">40分钟</div>
      </div>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
