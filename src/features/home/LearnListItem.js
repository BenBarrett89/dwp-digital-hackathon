import React, { Component } from 'react'

export default class LearnListItem extends Component {
  render () {
    return (
      <div>
        <div style={{float: 'left', width: '20%'}}>
          {this.props.title}
        </div>
        <div style={{float: 'left', width: '25%'}}>
          {this.props.description}
        </div>
        {this.props.distance && (
          <div style={{float: 'left', width: '25%'}}>
            {this.props.distance} miles away
          </div>
        )}
        {this.props.online && (
          <div style={{float: 'left', width: '25%'}}>
            Online course
          </div>
        )}
        <div style={{float: 'left', width: '25%'}}>
          {this.props.duration} long
        </div>
        <div style={{float: 'left', width: '5%'}}>
          <button href={this.props.url}>Enrol</button>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}
