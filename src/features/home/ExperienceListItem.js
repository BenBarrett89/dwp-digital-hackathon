import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ExperienceListItem extends Component {

  render () {
    return (
      <div>
        <div style={{float: 'left', width: '20%'}}>
          <Link to={this.props.url}>{this.props.title}</Link>
        </div>
        <div style={{float: 'left', width: '55%'}}>
          Having experience in <Link to={this.props.url}>{this.props.title.toLowerCase()}</Link> will open up {this.props.percentageIncrease}% more jobs in your area!
        </div>
        <div style={{float: 'left', width: '25%'}}>
          <Link to={this.props.url}>
            <button>Get experience</button>
          </Link>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}
