'use strict'

import React, { Component } from 'react'
import Loader from './shared/loader'

class Tickets extends Component {
  constructor () {
    super()
    this.state = {
      airlines: [],
      flightsInbound: [],
      flightsOutbound: [],
      flightsBestPrice: {}
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      airlines: nextProps.airlines
    })
  }

  render () {
    if (this.state.airlines.length !== 0) {
      this.state.airlines.forEach(airline => {
        airline.request
          .then(res => res.data)
          .then(data => {
            console.log(data)
          }).catch(err => console.error(err))
      })
    }

    return (
      <div className={'tickets ' + (this.state.airlines.length !== 0 ? '' : 'tickets--none')}>
        <div className='list'>
          <div className='list__header'>
            <div className='list__header__company'>Cia Aérea</div>
            <div className='list__header__departure'>Partida</div>
            <div className='list__header__duration'>Duração</div>
            <div className='list__header__arrival'>Chegada</div>
          </div>
          <div className='list__item'>
            <div className='list__item--company'>
              <span><b>GOL</b>G3-9018</span>
            </div>
            <div className='list__item--departure'>
              <span><b>06:55</b>CNF</span>
            </div>
            <div className='list__item--duration'>
              <span><b>1H55</b>VOO DIRETO</span>
            </div>
            <div className='list__item--arrival'>
              <span><b>06:55</b>FLN</span>
            </div>
            <div className='list__item--price'>
              <p>GOL<b>R$ 150,00</b></p>
              <button className='btn btn--primary btn--lg'>R$ 100,00</button>
              <p className='list__item--price--economy'>Economize 42% na MaxMilhas</p>
            </div>
            <div className='list__item--details'>
              <a role='button'><i className='fa fa-plus' aria-hidden='true' />Detalhes do Voo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tickets
