import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/root.store';

import Header from './containers/header';
import Contetnt from './containers/content';

class App extends React.Component {
  public render(): JSX.Element {
    return <Provider store={store}>
      <>
        <Header />
        <Contetnt />
      </>
    </Provider>;
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
)