'use strict'

import appConfig from './../config'
import Api from './api'

class ApiAirports extends Api {
  constructor (host) {
    super()
    this._host = host
  }

  buscar () {
    return this.get('')
  }
}

const apiAirports = new ApiAirports(appConfig.api.api_airports)
export default apiAirports
