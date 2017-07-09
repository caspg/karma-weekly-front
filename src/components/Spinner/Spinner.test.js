import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Spinner from './Spinner';

describe('Spinner component', () => {
  it('matches a snapshot with default props', () => {
    const component = shallow(
      <Spinner />
    );

    expect(toJson(component)).toMatchSnapshot();
  });

  it('matches a snapshot with custom props', () => {
    const component = shallow(
      <Spinner
        mainColor="#000"
        bgColor="#fff"
        radius="50em"
      />
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
