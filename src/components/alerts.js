'use strict'

import React from 'react'
import Loader from './shared/loader'

const Alerts = ({ loaderflightPrice, flightPrice }) => {
  const flightPriceExists = Object.keys(flightPrice).length !== 0

  if (loaderflightPrice) {
    return (
      <div className='alerts'>
        <Loader />
      </div>
    )
  } else {
    return (
      <div className={'alerts ' + (flightPriceExists ? '' : 'alerts--none')}>
        <div className='panel'>
          <div className='panel__header'>
            <h3>Crie um alerta de preço para essa busca</h3>
            <div className='panel__header__details'>
              <i className='fa fa-bell-o' aria-hidden='true' />
            </div>
          </div>
          <div className='panel__body' />
        </div>
      </div>
    )
  }
}

export default Alerts
