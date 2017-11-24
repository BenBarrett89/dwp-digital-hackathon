import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CareerListItem extends Component {

  render () {
    return (
      <tr className='careerListItems'>
        <td style={{width: '10%'}}>
          {this.props.title}
        </td>
        <td style={{width: '20%'}}>
          <span className='listHighlight'>{this.props.percentageMatch}% of skills already</span>
        </td>
        <td style={{width: '15%'}}>
          {this.props.jobs} jobs in your area
        </td>
        <td style={{width: '40%'}}>
          <p>{this.props.description}</p>
        </td>
        <td style={{width: '15%'}}>
          <Link to={this.props.url}>
            <button>Try career</button>
          </Link>
        </td>
      </tr>
    )
  }
}
