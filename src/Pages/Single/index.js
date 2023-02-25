import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { audyo, instanse, single } from "../../components/Utils";
import cl from "./stayle.module.scss";
import ReactAudioPlayer from "react-audio-player";

export const Single = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [audio, setAudio] = useState();
  const [uzb, setUzb] = useState();

  useEffect(() => {
    single.get(`api/v1/translation/sura/uzbek_mansour/${id}`).then((res) => {
      setData(res.data.result);
    });
    instanse.get(`v1/surah/${id}/uz.sodik`).then((res) => {
      setUzb(res.data.data);
    });

    audyo.get(`${id}/ar.alafasy`).then((res) => {
      setAudio(res.data.data.ayahs);
    });
  }, []);

  return (
    <div className={cl.wrapper}>
      <h1 className={cl.wrapper__title}>{uzb?.englishName}</h1>
      <h1 className={cl.wrapper__heading}>{uzb?.name}</h1>
      <div className={cl.wrapper__folder}>
        {data?.map((e, i) => {
          return (
            <div>
              <Card key={e} title={e?.translation} name={e?.arabic_text} />
              <ReactAudioPlayer
                style={{ backgroundColor: "#f1f1f1", width: "100%" }}
                src={audio[i].audio}
                controls
                // autoPlay={audio[i + 1].audio}
                // autoPlay={(e) => {
                //   audio[i + 1].audio;
                // }}
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
