import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import CareerListItem from './CareerListItem'

export class Career extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-career">
        <h1>Sorry, no jobs found</h1>
        <p>Sorry, we couldn't find any jobs in your provided sector in your area.</p>
        <p>You can try widening your distance to see if there are jobs further away from you in your chosen sector.</p>
        <hr />
        <h1>Have you thought about a change in career?</h1>
        <p>Changing your career may benefit you; the skills you already have are transferrable.</p>
        <p>The following career change may be a good match for you:</p>
        <CareerListItem
          title={'Hospitality'}
          description={'The hospitality industry is a broad category of fields within service industry that includes lodging, event planning, theme parks, transportation, cruise line, and additional fields within the tourism industry.'}
          percentageMatch={75}
          jobs={6}
          url={'/rate'}
          />
          <CareerListItem
            title={'Airline'}
            description={'An airline is a company that provides air transport services for traveling passengers and freight. Airlines utilize aircraft to supply these services and may form partnerships or alliances with other airlines for codeshare agreements.'}
            percentageMatch={65}
            jobs={3}
            url={'/rate'}
            />
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
)(Career);
