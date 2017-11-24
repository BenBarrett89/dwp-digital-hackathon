import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import LearnListItem from './LearnListItem'

export class Experience extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-experience upskillDiv">
        <div style={{float: 'left', width:'40%'}}>
          <h1>Shadowing Chefs</h1>
        </div>
        <div style={{float: 'right', width:'60%'}}>
          <p>Shadowing other chefs can really improve your existing culinary skills. Learning tips and tricks from professional chefs can improve your efficiency and the quality of your dishes.</p>
        </div>
        <div style={{clear: 'both'}} />
        <hr />
        <div className='skills-table'>
          <table>
            <thead>
              <th>Location</th>
              <th>Description</th>
              <th>Distance</th>
              <th>Enrol</th>
            </thead>
            <tbody>
              <LearnListItem
                title='Restaurant X'
                description='Restaurant X are offering for chefs in training to shadow some of their chefs'
                url='/'
                online={false}
                distance={4.6}
                duration={'1 day a week'}
                />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experience);
