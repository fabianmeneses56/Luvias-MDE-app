import axios from 'axios';

export const siataApi = axios.create({
  baseURL: 'https://siata.gov.co/data/siata_app',
  headers: {
    'Content-Type': 'application/json',
  },
});
