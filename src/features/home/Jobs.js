import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import JobListItem from './JobListItem'
import SkillListItem from './SkillListItem'
import ExperienceListItem from './ExperienceListItem'

export class Jobs extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-jobs">
        <div className='today'>
          <h1>Jobs in your area you can apply for today</h1>
            <JobListItem
              percentageMatch={100}
              title={'Chef'}
              distance={5.4}
              url={'/'}
              />
        </div>
        <hr />
        <div className='jobSkills'>
          <h1>Jobs in your area you can apply for with some training</h1>
            <JobListItem
              percentageMatch={85}
              title={'Pastry Chef'}
              distance={3.4}
              url={'/'}
              skills={[{name: 'Pastry making', url: '/skill'}]}
              />
            <JobListItem
              percentageMatch={77}
              title={'Head Chef'}
              distance={8.2}
              url={'/'}
              skills={[{name: 'Leadership', url: '/skill'},{name: 'Management', url: '/skill'}]}
              />
        </div>
        <hr />
          <div className='skillsForJobs'>
            <h1>Get skills</h1>
              <SkillListItem
                title={'Pastry making'}
                url={'/skill'}
                percentageIncrease={33}
                />
              <SkillListItem
                title={'Leadership'}
                url={'/skill'}
                percentageIncrease={33}
                />
              <SkillListItem
                title={'Management'}
                url={'/skill'}
                percentageIncrease={33}
                />
          </div>
          <hr />
          <div className='jobExperience'>
            <h1>Get experience</h1>
              <ExperienceListItem
                title={'Shadowing chefs'}
                url={'/experience'}
                percentageIncrease={50}
                />
              <ExperienceListItem
                title={'Washing dishes'}
                url={'/experience'}
                percentageIncrease={5}
                />
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
)(Jobs);
