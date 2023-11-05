import DateShow from './DateShow/DateShow';
import './LogItem.css';
import PropTypes from 'prop-types';
const LogItem = (props) => {
  // const onClickHandler = (event) => {
  //   event.preventDefault();
  //   // if (event instanceof MouseEvent) event.preventDefault();
  // };
  console.log(props);
  return (
    <>
      {/* 日志项容器 */}
      <div className="item">
        <DateShow date={props.date} />
        <div className="content">
          <h2 className="desc">{props.desc}</h2>
          <div className="time">{props.time}</div>
        </div>
      </div>
    </>
  );
};
LogItem.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  desc: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
export default LogItem;
