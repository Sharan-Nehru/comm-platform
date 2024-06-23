import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import EmailHistory from './components/EmailHistory';
import ComposeEmail from './components/ComposeEmail';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/history" component={EmailHistory} />
          <Route path="/compose" component={ComposeEmail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
