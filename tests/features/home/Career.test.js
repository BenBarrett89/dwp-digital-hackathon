import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Career } from 'src/features/home/Career';

describe('home/Career', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Career {...props} />
    );

    expect(
      renderedComponent.find('.home-career').getElement()
    ).to.exist;
  });
});
