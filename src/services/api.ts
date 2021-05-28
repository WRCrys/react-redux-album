/* eslint-disable import/extensions */
import axios from 'axios';
import { setEnvironment } from '../environments/index';

const enviroment = setEnvironment();

const api = axios.create({
  baseURL: enviroment.Api.Url,
});

export default api;
