import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class JobListItem extends Component {

  render () {
    return (
      <div>
        <div style={{float: 'left', width: '25%'}}>
          {this.props.percentageMatch}%
        </div>
        <div style={{float: 'left', width: '25%'}}>
          <a href={this.props.url}>{this.props.title}</a>
        </div>
        <div style={{float: 'left', width: '25%'}}>
          {this.props.distance} miles away
        </div>
        <div style={{float: 'left', width: '25%'}}>
          {this.props.skills && this.props.skills.map((skill, index) => {
            return (
              <Link key={index} to={skill.url}>
                <button>{skill.name}</button>
              </Link>
            )
          }
          )}
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}
