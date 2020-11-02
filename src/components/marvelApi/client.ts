import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    apikey: process.env.NEXT_PUBLIC_MARVEL_PUBLIC_KEY,
  },
})
