import React from "react";
import { instanse } from "../../components/Utils";
import { useEffect, useState } from "react";
import cl from "./stayle.module.scss";
import { Link } from "react-router-dom";
import { Card } from "../../components/Cards";

export const AllQuran = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    instanse.get(`v1/surah`).then((res) => {
      setData(res.data.data);
    });
  }, []);

  console.log(data);
  return (
    <div className={cl.wrapper}>
      <div className={cl.wrapper__cards}>
        {data?.map((e) => (
          <Link to={`${e.number}`}>
            <Card
              key={e.number}
              name={e.name}
              title={e.englishName}
              oyat={e.numberOfAyahs}
              locotion={
                e.revelationType == "Meccan"
                  ? "🕋"
                  : e.revelationType == "Medinan"
                  ? "🕌"
                  : null
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
