// import "./time.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const Time = () => {
  const [timeData, setTimeData] = useState({});
  const [hours, setHours] = useState(0);
  useEffect(() => {
    axios
      .get("https://islomapi.uz/api/present/day?region=Toshkent")
      .then((data) => setTimeData(data?.data?.times));
    const nowTime = new Date();
    setHours(Number(`${nowTime.getHours()}${nowTime.getMinutes()}`));
  }, []);
  const timeArray = Object.values(timeData);
  const [...sum] = timeArray.map((item) => Number(item.split(":").join("")));
  return (
    <div className="container">
      {timeArray.map((item, index) => (
        <h2
          key={index}
          className={
            hours > Math.max.apply(Math, sum)
              ? setHours(0)
              : sum?.find((item) => item > hours) ===
                Number(item?.split(":")?.join(""))
              ? "active time"
              : "time"
          }
        >
          {item}
        </h2>
      ))}
    </div>
  );
};
export default Time;
