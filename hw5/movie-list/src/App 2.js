import React, { Fragment } from 'react';
import store from './store';
import './App.css';
import MoiveList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <MoiveList />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
