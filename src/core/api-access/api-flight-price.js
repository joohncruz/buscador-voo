'use strict'

import appConfig from './../config'
import Api from './api'

class ApiFlightPrice extends Api {
  constructor (host) {
    super()
    this._host = host
  }

  search (time, params) {
    return this.post(`/search?time=${time}`, params)
  }

  searchFlightAirline (id, airline) {
    return this.get(`/search/${id}/flights?airline=${airline}`)
  }
}

const apiFlightPrice = new ApiFlightPrice(appConfig.api.api_search_flights)
export default apiFlightPrice
