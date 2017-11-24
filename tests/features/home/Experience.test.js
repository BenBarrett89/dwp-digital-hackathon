import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Experience } from 'src/features/home/Experience';

describe('home/Experience', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Experience {...props} />
    );

    expect(
      renderedComponent.find('.home-experience').getElement()
    ).to.exist;
  });
});
