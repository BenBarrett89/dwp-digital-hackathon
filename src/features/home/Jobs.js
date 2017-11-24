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
        <div className='job-area'>
          <h1 className='job-title'>Jobs in your area you can apply for today</h1>
            <table>
              <thead>
                <tr>
                  <th className='job-quarter'>Match</th>
                  <th className='job-quarter'>Job Title</th>
                  <th className='job-quarter'>Distance</th>
                  <th className='job-quarter'>Enrol</th>
                </tr>
              </thead>
              <tbody>
                <JobListItem
                  percentageMatch={85}
                  title={'Chef'}
                  distance={5.4}
                  url={'/'}
                  skills={[{name: 'Enrol', url: '/'}]}
                  />
                <tr></tr>
              </tbody>
            </table>
        </div>
        <hr />
        <div className='job-area'>
          <h1 className='job-title'>Jobs in your area you can apply for with some training</h1>
          <table>
            <thead>
              <tr>
                <th>Match</th>
                <th>Job Title</th>
                <th>Distance</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
        <hr />
          <div className='job-area'>
            <h1 className='job-title'>Get skills</h1>
            <table>
              <thead>
                <th>Skill</th>
                <th>Description</th>
                <th>Learn</th>
              </thead>
              <tbody>
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
              </tbody>
            </table>
          </div>
          <hr />
          <div className='job-area'>
            <h1 className='job-title'>Get experience</h1>
              <table>
                <thead>
                  <th>Experience</th>
                  <th>Benefit</th>
                  <th>Apply</th>
                </thead>
                <tbody>
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
)(Jobs);
