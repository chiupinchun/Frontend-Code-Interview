import axios, { AxiosRequestConfig } from 'axios'

export const request = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? `http://localhost:3000`
    : 'https://domain',
  headers: {
    'Accept': 'application/json',
  },
})