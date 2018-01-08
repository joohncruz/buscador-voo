'use strict'

import axios from 'axios'

export default class Api {
  constructor (host) {
    this._host = host
  }

  get (url, options) {
    return axios.get(`${this._host}${url}`, options)
  }

  post (url, body) {
    return axios.post(`${this._host}${url}`, body)
  }
}
