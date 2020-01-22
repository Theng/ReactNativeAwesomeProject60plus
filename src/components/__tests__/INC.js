import React from 'react';
import INC from '../INC';
import {render, cleanup} from 'react-native-testing-library';

afterEach(cleanup);

describe('<INC />', () => {
  it('should match snapshot', () => {
    const rendered = render(<INC label="increase"/>).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});