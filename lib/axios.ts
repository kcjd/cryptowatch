import axios from 'axios'

import { COIN_API_URL } from './constants'

const instance = axios.create({
  baseURL: COIN_API_URL,
})

export default instance
