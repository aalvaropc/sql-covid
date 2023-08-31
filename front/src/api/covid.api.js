import axios from 'axios';

export const getDatos = () => {
  return axios.get('http://127.0.0.1:8000/covidstats/api/clasificacions/')
}