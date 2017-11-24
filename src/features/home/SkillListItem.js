import React, { Component } from 'react'

export default class JobListItem extends Component {

  render () {
    return (
      <div>
        <div style={{float: 'left', width: '20%'}}>
          <button href={this.props.url}>{this.props.title}</button>
        </div>
        <div style={{float: 'left', width: '55%'}}>
          Learning <a href={this.props.url}>{this.props.title}</a> will open up {this.props.percentageIncrease}% more jobs in your area!
        </div>
        <div style={{float: 'left', width: '25%'}}>
          <button>Learn now!</button>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}
