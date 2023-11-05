import LogItem from './LogItem';
import './Logs.css';
const Logs = () => {
  // 模拟数据
  const logsData = [
    {
      id: '001',
      date: new Date(2022, 10, 20, 19, 30),
      desc: '学习前端1',
      time: '10',
    },
    {
      id: '002',
      date: new Date(2022, 11, 10, 20, 35),
      desc: '学习前端2',
      time: '20',
    },
    {
      id: '003',
      date: new Date(2023, 6, 1, 9, 20),
      desc: '学习前端3',
      time: '30',
    },
    {
      id: '004',
      date: new Date(2033, 8, 12, 8, 45),
      desc: '学习前端4',
      time: '40',
    },
    {
      id: '005',
      date: new Date(2013, 4, 19, 8, 45),
      desc: '学习前端5',
      time: '50',
    },
  ];
  // 将数据放入 jsx
  const logItemData = logsData.map((item) => (
    <LogItem key={item.id} {...item} />
  ));
  return <div className="logs">{logItemData}</div>;
};
export default Logs;
