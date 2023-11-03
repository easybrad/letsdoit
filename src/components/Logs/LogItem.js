import DateShow from './DateShow/DateShow';
import './LogItem.css';
const LogItem = () => {
  return (
    <em>
      {/* 日志项容器 */}
      <div className="item">
        <DateShow />
        <div className="content">
          <h2 className="desc">学习 React22</h2>
          <div className="time">40分钟</div>
        </div>
      </div>
    </em>
  );
};
export default LogItem;
