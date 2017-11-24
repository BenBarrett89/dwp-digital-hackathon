import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Rate } from 'src/features/home/Rate';

describe('home/Rate', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Rate {...props} />
    );

    expect(
      renderedComponent.find('.home-rate').getElement()
    ).to.exist;
  });
});
