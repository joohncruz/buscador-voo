'use strict'

import React, { Component } from 'react'

import Header from './components/header'
import Search from './components/search'
import OutboundTicket from './components/outbound-ticket'
import InboundTicket from './components/inbound-ticket'
import Alerts from './components/alerts'
import Tickets from './components/tickets'
import Settings from './components/settings'

import ApiFlightPrice from './core/api-access/api-flight-price'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Shun',
      isSearchable: true,
      flight: {
        tripType: 'RT',
        from: 'REC',
        to: 'RIO',
        outboundDate: '2018-01-10',
        inboundDate: '2018-01-12',
        cabin: 'EC',
        adults: 2,
        children: 1,
        infants: 0
      },
      loaderflightPrice: false,
      flightPrice: {},
      airlines: []
    }
  }

  handleAlterSearch () {
    this.setState({ isSearchable: true, loaderflightPrice: false })
  }

  handleSubmitSearch (flight) {
    this.setState({ loaderflightPrice: true, isSearchable: false, flight })

    ApiFlightPrice.search(Date.now(), this.state.flight)
      .then(res => res.data)
      .then(data => {
        this.setState({ loaderflightPrice: false, flightPrice: data })

        let airlines =
        data.airlines
          .filter(x => x.status.enable === true)
          .map(x => {
            x.request = ApiFlightPrice.searchFlightAirline(data.id, x.label)
            return x
          })

        this.setState({ airlines })
      }).catch(err => console.log(err))
  }

  render () {
    return (
      <div className='container'>
        <Header />
        <Search
          flight={this.state.flight}
          isSearchable={this.state.isSearchable}
          handleAlterSearch={() => this.handleAlterSearch()}
          handleSubmitSearch={(flight) => this.handleSubmitSearch(flight)}

        />
        <OutboundTicket />
        <InboundTicket />
        <Alerts loaderflightPrice={this.state.loaderflightPrice} flightPrice={this.state.flightPrice} />
        <Tickets airlines={this.state.airlines} />
        <Settings />
      </div>
    )
  }
}

export default App
