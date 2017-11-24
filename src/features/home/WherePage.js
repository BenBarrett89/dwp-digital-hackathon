import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Link } from 'react-router-dom';

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
          <Link to='/what'>
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
)(WherePage);
