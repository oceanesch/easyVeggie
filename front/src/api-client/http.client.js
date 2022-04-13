import { default as axios } from 'axios';

// Instantiate axios client
export const httpClient = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: { 'Content-Type': 'application/json' },
});
