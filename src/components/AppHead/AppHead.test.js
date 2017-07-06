import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AppHead from './AppHead';

describe('AppHead component', () => {
  it('matches a snapshot', () => {
    const component = shallow(
      <AppHead title="Head title" />
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
