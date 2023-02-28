import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { audyo, instanse, single } from "../../components/Utils";
import cl from "./stayle.module.scss";
import ReactAudioPlayer from "react-audio-player";
import { LangueContext } from "../../components/context";
import axios from "axios";

export const Single = () => {
  const { num, setNum, Setlanguzb, Setlangru, langUzb, langue } =
    useContext(LangueContext);

  console.log(num);
  const { id } = useParams();

  const [audio, setAudio] = useState();
  const [data, setData] = useState();
  const [datas, setDatas] = useState();

  setNum(id);

  useEffect(() => {
    audyo.get(`${id}/ar.alafasy`).then((res) => {
      setAudio(res.data.data.ayahs);
    });
  }, []);

  useEffect(() => {
    instanse.get(`v1/surah/${id}/uz.sodik`).then((res) => {
      setData(res.data.data);
    });
    axios
      .get(
        langue !== "uzb"
          ? `https://api.alquran.cloud/v1/surah/${id}/${langue}`
          : `https://quranenc.com/api/v1/translation/sura/uzbek_mansour/${id}`
      )
      .then((res) => {
        console.log(res.data);
        if (langue == "uzb") {
          setDatas(res.data.result);
        } else {
          setDatas(res.data.data.ayahs);
        }
      });
  }, [langue]);

  console.log(datas, "data");

  return (
    <div className={cl.wrapper}>
      <h1 className={cl.wrapper__title}>{data?.englishName}</h1>
      <h1 className={cl.wrapper__heading}>{data?.name}</h1>
      <div className={cl.wrapper__folder}>
        {datas?.map((e, i) => {
          return (
            <div>
              <Card key={e} title={e?.translation} name={e?.text} />
              <ReactAudioPlayer
                style={{ backgroundColor: "#f1f1f1", width: "100%" }}
                src={audio[i].audio}
                controls
                crossOrigin
                controlsList
                listenInterval
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// https://api.alquran.cloud/v1/surah/1/en.ahmedali

// https://api.alquran.cloud/v1/surah/1/ru.kuliev

// https://api.alquran.cloud/v1/surah/1/ru.kuliev
