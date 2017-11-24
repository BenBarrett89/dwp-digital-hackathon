import React, { Component } from 'react'

export default class CareerListItem extends Component {

  render () {
    return (
      <div>
        <div style={{float: 'left', width: '10%'}}>
          {this.props.title}
        </div>
        <div style={{float: 'left', width: '20%'}}>
          {this.props.percentageMatch}% of skills already
        </div>
        <div style={{float: 'left', width: '15%'}}>
          {this.props.jobs} jobs in your area
        </div>
        <div style={{float: 'left', width: '40%'}}>
          <p>{this.props.description}</p>
        </div>
        <div style={{float: 'left', width: '15%'}}>
          <button href={this.props.url}>Try career</button>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}
