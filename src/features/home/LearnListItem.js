import React, { Component } from 'react'

export default class LearnListItem extends Component {
  render () {
    return (
      <tr>
        <td style={{width: '20%'}}>
          {this.props.title}
        </td>
        <td style={{width: '25%'}}>
          {this.props.description}
        </td>
        {this.props.distance && (
          <td style={{width: '25%'}}>
            {this.props.distance} miles away
          </td>
        )}
        {this.props.online && (
          <td style={{width: '25%'}}>
            Online course
          </td>
        )}
        <td style={{width: '25%'}}>
          {this.props.duration}
        </td>
        <td style={{width: '5%'}}>
          <button href={this.props.url}>Enrol</button>
        </td>
      </tr>
    )
  }
}
