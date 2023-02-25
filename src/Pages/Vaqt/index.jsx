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

  const bomdod = data?.times?.tong_saharlik.split(":").join("");
  const peshin = data?.times?.peshin.split(":").join("");
  const asr = data?.times?.asr.split(":").join("");
  const shom = data?.times?.shom_iftor.split(":").join("");
  const hufton = data?.times?.hufton.split(":").join("");

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");

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
              backgroundColor:
                hufton < `${hours}${minutes}` && peshin > `${hours}${minutes}`
                  ? "red"
                  : null,
            }}
            className={cl.wrapper__data}
          >
            {data?.times.tong_saharlik} Bomdod
          </h3>
          <h3
            style={{
              backgroundColor:
                bomdod < `${hours}${minutes}` && asr > `${hours}${minutes}`
                  ? "red"
                  : null,
            }}
            className={cl.wrapper__data}
          >
            {data?.times.peshin} Peshin
          </h3>
          <h3
            style={{
              backgroundColor:
                peshin < `${hours}${minutes}` && shom > `${hours}${minutes}`
                  ? "red"
                  : null,
            }}
            className={cl.wrapper__data}
          >
            {data?.times.asr} Asr
          </h3>
          <h3
            style={{
              backgroundColor:
                asr < `${hours}${minutes}` && hufton > `${hours}${minutes}`
                  ? "red"
                  : null,
            }}
            className={cl.wrapper__data}
          >
            {data?.times.shom_iftor} Shom
          </h3>
          <h3
            style={{
              backgroundColor:
                hufton < `${hours}${minutes}` && peshin > `${hours}${minutes}`
                  ? "red"
                  : null,
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
