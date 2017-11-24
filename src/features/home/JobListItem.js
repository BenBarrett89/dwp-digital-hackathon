import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class JobListItem extends Component {

  render () {
    return (
      <tr>
        <td className='job-quarter'>
          {this.props.percentageMatch}% match
        </td>
        <td className='job-quarter'>
          <a href={this.props.url}>{this.props.title}</a>
        </td>
        <td className='job-quarter'>
          {this.props.distance} miles away
        </td>
        <td className='job-quarter'>
          {this.props.skills.map((skill, index) => {
            return (
              <Link key={index} to={skill.url}>
                <button>{skill.name}</button>
              </Link>
            )
          })}
        </td>
      </tr>
    )
  }
}
