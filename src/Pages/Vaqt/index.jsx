import React, { useEffect, useState } from "react";
import cl from "./stayle.module.scss";
import { clock } from "../../components/Utils";

export const Vaqt = () => {
  const [data, setData] = useState();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    clock.get("").then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const bomdod = Number(data?.times?.tong_saharlik.substring(0, 2));
  const peshin = Number(data?.times?.peshin.substring(0, 2));
  const asr = Number(data?.times?.asr.substring(0, 2));
  const shom = Number(data?.times?.shom_iftor.substring(0, 2));
  const hufton = Number(data?.times?.hufton.substring(0, 2));

  const hours = time.getHours();
  const minutes = time.getMinutes();

  const soat = hours < 10 ? hours + 0 : hours;

  console.log(hufton < hours && peshin > hours, "bomdod");
  console.log(bomdod < hours && asr > hours, "peshin");
  console.log(peshin < hours && shom > hours, "asr");
  console.log(asr < hours && hufton > hours, "shom");
  console.log(shom < hours && bomdod > hours, "hufton");

  return (
    <div className={cl.wrapper}>
      <h1 className={cl.wrapper__heading}>Namoz Vaqtlari</h1>
      <div className={cl.wrapper__box}>
        <h1>
          {hours}:{minutes}
        </h1>
        <h1 className={cl.wrapper__title}>{data?.region}</h1>
        <h2 className={cl.wrapper__text}>{data?.date}</h2>
        <h2 className={cl.wrapper__text}>{data?.weekday}</h2>
        <div className={cl.wrapper__folder}>
          <h3
            style={{
              backgroundColor: hufton < soat && peshin > soat ? "red" : null,
            }}
            className={cl.wrapper__data}
          >
            {data?.times.tong_saharlik} Bomdod
          </h3>
          <h3
            style={{
              backgroundColor: bomdod < soat && asr > soat ? "red" : null,
            }}
            className={cl.wrapper__data}
          >
            {data?.times.peshin} Peshin
          </h3>
          <h3
            style={{
              backgroundColor: peshin < soat && shom > soat ? "red" : null,
            }}
            className={cl.wrapper__data}
          >
            {data?.times.asr} Asr
          </h3>
          <h3
            style={{
              backgroundColor: asr < soat && hufton > soat ? "red" : null,
            }}
            className={cl.wrapper__data}
          >
            {data?.times.shom_iftor} Shom
          </h3>
          <h3
            style={{
              backgroundColor: shom < soat && bomdod > soat ? "red" : null,
            }}
            className={cl.wrapper__data}
          >
            {data?.times.hufton} Xufton
          </h3>
        </div>
      </div>
    </div>
  );
};
