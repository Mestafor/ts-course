import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/root.store';

class App extends React.Component {
  public render(): JSX.Element {
    return <Provider store={store}>
        <div>
          Test
        </div>
      </Provider>;
  }
}

ReactDom.render(
  <App />,
  document.getElementById('root')
)