import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class WherePage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-where-page">
        <div>
          <h1>Where do you live?</h1>
          <label htmlFor='postcode'>Postcode:</label>
          <input id='postcode'></input>
        </div>
        <hr />
        <div>
          <h1>How far can you travel?</h1>
          <input type='number' id='travel'></input>
          <label htmlFor='travel'>miles</label>
        </div>
        <div>
          <button>Next</button>
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
)(WherePage);
