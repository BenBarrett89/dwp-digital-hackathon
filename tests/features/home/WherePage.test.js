import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { WherePage } from 'src/features/home/WherePage';

describe('home/WherePage', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <WherePage {...props} />
    );

    expect(
      renderedComponent.find('.home-where-page').getElement()
    ).to.exist;
  });
});
