import React, { Component } from 'react'

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
            return (<button key={index} href={skill.url}>{skill.name}</button>)
          }
          )}
        </div>
        <div style={{clear: 'both'}} />
      </div>
    )
  }
}
