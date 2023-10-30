const App = () => {
  return (
    <em>
      <div className="logs">
        {/* 日志项容器 */}
        <div className="item">
          <div className="date">
            <div className="month">四月</div>
            <div className="day">10</div>
          </div>
          <div className="content">
            <h2 className="desc">学习 React22</h2>
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
    </em>
  );
};
export default App;
