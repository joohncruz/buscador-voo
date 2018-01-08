'use strict'

import React, { Component } from 'react'
import ApiAirports from '../core/api-access/api-airports'

ApiAirports.buscar().then(res => console.log(res)).catch(err => console.error(err))

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      flight: this.props.flight
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      airlines: nextProps.airlines
    })
  }

  render () {
    if (this.props.isSearchable) {
      return (
        <div className='search'>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              this.props.handleSubmitSearch(this.state.flight)
            }}
          >
            <div className='search__form'>
              <div className='search__form__group col-6'>
                <label htmlFor='sair de'><i className='fa fa-plane' />Sair de</label>
                <input type='text' className='search__form--control' id='from' value={this.state.flight.from} onChange={(e) => {
                  this.setState({ flight: { from: e.target.value } })
                }} />
              </div>

              <div className='search__form__group col-6'>
                <label htmlFor='ir para'><i className='fa fa-plane' />Ir para</label>
                <input type='text' className='search__form--control' id='to' value={this.state.flight.to} onChange={(e) => {
                  this.setState({ flight: { to: e.target.value } })
                }} />
              </div>

              <div className='search__form__group col-6'>
                <label htmlFor='ir para'><i className='fa fa-calendar-o' />Ida</label>
                <input type='text' className='search__form--control' id='outboundDate' value={this.state.flight.outboundDate} onChange={(e) => {
                  this.setState({ flight: { outboundDate: e.target.value } })
                }} />
              </div>

              <div className='search__form__group col-6'>
                <label htmlFor='ir para'><i className='fa fa-calendar-o' />Volta</label>
                <input type='text' className='search__form--control' id='inboundDate' value={this.state.flight.inboundDate} onChange={(e) => {
                  this.setState({ flight: { inboundDate: e.target.value } })
                }} />
              </div>

              <div className='search__form__group'>
                <label htmlFor='ir para'>Cabine</label>
                <select id='cabin' value={this.state.flight.cabin} onChange={(e) => {
                  this.setState({ flight: { cabin: e.target.value } })
                }}>
                  <option value='EC'> Classe Economica </option>
                  <option value='EX'> Classe Executiva </option>
                </select>
              </div>

              <div className='search__form__group'>
                <label htmlFor='adults'>Passageiros Adultos</label>
                <select id='adults' value={this.state.flight.adults} onChange={(e) => {
                  this.setState({ flight: { adults: e.target.value } })
                }}>
                  <option value='0'> 0 </option>
                  <option value='1'> 1 </option>
                  <option value='2'> 2 </option>
                  <option value='3'> 3 </option>
                  <option value='4'> 4 </option>
                  <option value='5'> 5 </option>
                  <option value='6'> 6 </option>
                  <option value='7'> 7 </option>
                  <option value='8'> 8 </option>
                  <option value='9'> 9 </option>
                </select>
              </div>

              <div className='search__form__group'>
                <label htmlFor='children'>Crianças</label>
                <select id='children' value={this.state.flight.children} onChange={(e) => {
                  this.setState({ flight: { children: e.target.value } })
                }}>
                  <option value='0'> 0 </option>
                  <option value='1'> 1 </option>
                  <option value='2'> 2 </option>
                  <option value='3'> 3 </option>
                  <option value='4'> 4 </option>
                  <option value='5'> 5 </option>
                  <option value='6'> 6 </option>
                  <option value='7'> 7 </option>
                  <option value='8'> 8 </option>
                  <option value='9'> 9 </option>
                </select>
              </div>

              <div className='search__form__group'>
                <label htmlFor='ir para'>Bebês</label>
                <select id='infants' value={this.state.flight.infants} onChange={(e) => {
                  this.setState({ flight: { infants: e.target.value } })
                }}>
                  <option value='0'> 0 </option>
                  <option value='1'> 1 </option>
                  <option value='2'> 2 </option>
                  <option value='3'> 3 </option>
                  <option value='4'> 4 </option>
                  <option value='5'> 5 </option>
                  <option value='6'> 6 </option>
                  <option value='7'> 7 </option>
                  <option value='8'> 8 </option>
                  <option value='9'> 9 </option>
                </select>
              </div>

              <button type='submit' className='btn btn--primary btn--sm'> <i className='fa fa-search' /> Pesquisar</button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div className='search'>
          <p>
            <span><i className='fa fa-map-marker' aria-hidden='true' /><b>CNF - FLN</b></span>
            <span><i className='fa fa-calendar' aria-hidden='true' /><b>08</b> NOV 2017</span>
            <span><i className='fa fa-calendar' aria-hidden='true' /><b>12</b> NOV 2017</span>
            <span><i className='fa fa-users' aria-hidden='true' /><b>1</b></span>
          </p>
          <p>
            <span><button className='btn btn--primary btn--sm' onClick={() => { this.props.handleAlterSearch() }}><i className='fa fa-search' /> Alterar</button></span>
          </p>
        </div>
      )
    }
  }
}

export default Search
