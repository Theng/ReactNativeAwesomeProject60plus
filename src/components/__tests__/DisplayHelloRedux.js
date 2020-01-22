import React from 'react';
import DisplayHelloRedux from '../DisplayHelloRedux';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, cleanup } from 'react-native-testing-library';

afterEach(cleanup);

describe('<DisplayHelloRedux />', () => {
  // configureStore expects a list of middlewares
  const mockStore = configureStore([]);
  
  it('should match snapshot', () => {
    const store = mockStore({hello: {data:"Hello redux test"}});
    const rendered = render(
      <Provider store={store}><DisplayHelloRedux /></Provider>
    ).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});