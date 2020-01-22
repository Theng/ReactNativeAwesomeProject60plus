import React from 'react';
import MainHeader from '../MainHeader';
import {render, cleanup} from 'react-native-testing-library';

afterEach(cleanup);

describe('<MainHeader />', () => {
  it('should match snapshot', () => {
    const rendered = render(<MainHeader />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});