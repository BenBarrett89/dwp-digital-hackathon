import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CareerListItem extends Component {

  render () {
    return (
      <div className='careerListItems'>
        <div style={{float: 'left', width: '10%'}}>
          {this.props.title}
        </div>
        <div className='listHighlight' style={{float: 'left', width: '20%'}}>
          {this.props.percentageMatch}% of skills already
        </div>
        <div style={{float: 'left', width: '15%'}}>
          {this.props.jobs} jobs in your area
        </div>
        <div style={{float: 'left', width: '40%'}}>
          <p>{this.props.description}</p>
        </div>
        <div style={{float: 'left', width: '15%'}}>
          <Link to={this.props.url}>
            <button>Try career</button>
          </Link>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}
