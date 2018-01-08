'use strict'

import React from 'react'

const Loader = () => (
  <div className='panel'>
    <div className='panel__header'>
      <h3>Carregando...</h3>
      <div className='panel__header__details'>
        <i className='fa fa-spinner fa-pulse fa-2x fa-fw' />
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  </div>
)

export default Loader
