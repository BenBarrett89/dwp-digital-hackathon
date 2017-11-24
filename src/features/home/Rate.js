import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Link } from 'react-router-dom';

import RateBox from './RateBox'

export class Rate extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-rate upskillDiv">
        <h1>How good are you at these skills?</h1>
        <RateBox title='Food hygiene' value='5' />
        <RateBox title='Communication' value='5' />
        <RateBox title='Working in a team' value='5' />
        <RateBox title='Time keeping' value='5' />
        <RateBox title='Working under pressure' value='5' />
        <div>
          <Link to='/jobs'>
            <button>
              Next
            </button>
          </Link>
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
)(Rate);
