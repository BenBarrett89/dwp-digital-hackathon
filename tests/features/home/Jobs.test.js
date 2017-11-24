import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Jobs } from 'src/features/home/Jobs';

describe('home/Jobs', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Jobs {...props} />
    );

    expect(
      renderedComponent.find('.home-jobs').getElement()
    ).to.exist;
  });
});
