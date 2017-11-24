import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Skill } from 'src/features/home/Skill';

describe('home/Skill', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Skill {...props} />
    );

    expect(
      renderedComponent.find('.home-skill').getElement()
    ).to.exist;
  });
});
