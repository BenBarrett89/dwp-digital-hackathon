import React, { Component } from 'react'

export default class RateBox extends Component {
  render () {
    return (
      <div>
        <div style={{float: 'left', width: '30%'}}>
          {this.props.title}
        </div>
        <div style={{float: 'left', width: '30%'}}>
          <input type='range' min='1' max='10' class='slider' />
        </div>
        <div style={{float: 'left', width: '30%'}}>
          {this.props.value}
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}
