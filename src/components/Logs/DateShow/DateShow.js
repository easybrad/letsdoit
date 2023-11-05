import './DateShow.css';
import PropTypes from 'prop-types';
const DateShow = (props) => {
  // 注意这里我们使用了 props.date 来调用 getMonth() 和 getDate()
  const month = props.date.toLocaleString('zh-CN', { month: 'long' }); // 月份加1，因为 getMonth() 返回的是0-11
  const day = props.date.getDate(); // 日期不需要加1，因为 getDate() 返回的是1-31

  return (
    <div className="date">
      <div className="month">{month}</div> {/* 这里显示的是字符串 */}
      <div className="day">{day}</div> {/* 这里显示的是字符串 */}
    </div>
  );
};

DateShow.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default DateShow;
