import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ExperienceListItem extends Component {

  render () {
    return (
      <tr>
        <td style={{width: '20%'}}>
          <Link to={this.props.url}>{this.props.title}</Link>
        </td>
        <td style={{width: '55%'}}>
          Having experience in <Link to={this.props.url}>{this.props.title.toLowerCase()}</Link> will open up {this.props.percentageIncrease}% more jobs in your area!
        </td>
        <td style={{width: '25%'}}>
          <Link to={this.props.url}>
            <button>Get experience</button>
          </Link>
        </td>
      </tr>
    )
  }
}
