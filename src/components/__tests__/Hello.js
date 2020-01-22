import React from 'react';
import Hello from '../Hello';
import {render, cleanup} from 'react-native-testing-library';

afterEach(cleanup);

describe('<Hello />', () => {
  it('should match snapshot', () => {
    const rendered = render(<Hello />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
  it('should show label abacaba', () => {
    const rendered = render(<Hello label={'abacaba'} />);
    const textComponent = rendered.getByTestId('text');
    expect(textComponent.props.children).toEqual('abacaba');
  });
});