import axios from 'axios';
import config from '@/config/dev.env';

export async function requestApi(city) {
  const url = `https://api.hgbrasil.com/weather?format=json-cors&key=${config.KEY}`;
  const api = await axios.get(`${url}&city_name=${city}`);
  const response = await api.data.results;

  return response;
}