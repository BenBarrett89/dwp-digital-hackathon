import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Skill extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-skill">
        <div style={{float: 'left', width:'40%'}}>
          <h1>Pastry making</h1>
        </div>
        <div style={{float: 'right', width:'60%'}}>
          <p>Pastry making is the art of making a pastry. It is a skill required for pastry chefs or pâtissiers.</p>
        </div>
<div style={{clear: 'both'}} />
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
)(Skill);
