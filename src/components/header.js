'use strict'

import React from 'react'

const Header = () => (
  <div className='header'>
    <div className='header__title'>
      <h1><i className='fa fa-bars' aria-hidden='true' />Teste Front </h1>
    </div>
    <div className='header__options'>
      <div className='header__options__sell'>
        <i className='fa fa-money' aria-hidden='true' />Venda suas milhas
        </div>
      <div className='header__options__doubt'>
        <i className='fa fa-question-circle-o' aria-hidden='true' />Tire suas dúvidas
        </div>
      <div className='header__options__auth'>
        <i className='fa fa-user' aria-hidden='true' />Login ou cadastro
        </div>
    </div>
    <div className='header__details'>
      <span><i className='fa fa-clock-o' aria-hidden='true' /> 20:00</span>
    </div>
  </div>
)

export default Header
