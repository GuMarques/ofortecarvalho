import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './view/login';
import NewUser from './view/newUser';


function App() {
  return (
    <Router>
      <Route exact path='/' component={Login} />
      <Route exact path='/newuser' component={NewUser} />
    </Router>
  );
}

export default App;
