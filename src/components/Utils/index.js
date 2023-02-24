import axios from "axios";

export const instanse = axios.create({
  baseURL: "https://api.alquran.cloud/",
  timeout: 10000,
});

export const clock = axios.create({
  baseURL: "https://islomapi.uz/api/present/day?region=Toshkent",
  timeout: 10000,
});

export const single = axios.create({
  baseURL: "https://quranenc.com/",
  timeout: 10000,
});

export const audyo = axios.create({
  baseURL: "https://api.alquran.cloud/v1/surah",
  timeout: 10000,
});
