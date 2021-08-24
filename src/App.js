import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store';

import Login from './view/login';
import NewUser from './view/newUser';
import Home from './view/home';
import LostPassword from './view/lostpassword';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/newuser' component={NewUser} />
        <Route exact path='/lostpassword' component={LostPassword} />

      </Router>
    </Provider>
  );
}

export default App;
