import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { WhatPage } from 'src/features/home/WhatPage';

describe('home/WhatPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <WhatPage {...props} />
    );

    expect(
      renderedComponent.find('.home-what-page').getElement()
    ).to.exist;
  });
});
