import React from 'react';
import { render } from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

const mockStore = configureStore([]);

describe('App', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      filesData: [
        {
          file: 'file1.csv',
          lines: [
            { text: 'RgTya', number: 64075909, hex: '70ad29aacf0b690b0467fe2b2767f765' },
            { text: 'AtjW', number: 6, hex: 'd33a8ca5d36d3106219f66f939774cf5' },
            { text: 'PNzRfORtKtEDOzmIVrQuSh', number: 74088708, hex: '3' },
            { text: 'd', number: 6173, hex: 'f9e1bcdb9e3784acc448af34f4727252' },
          ],
        },
      ],
      error: null,
    });

    component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should match the snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
