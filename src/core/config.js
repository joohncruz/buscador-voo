'use strict'

const configuration = {
  dev: {
    api: {
      api_airports: '../../docs/airports.json',
      api_search_flights: 'https://flight-price-hmg.maxmilhas.com.br'
    }
  }
}

const config = {
  'development': configuration.dev
}

const appConfig = config['development']

export default appConfig
