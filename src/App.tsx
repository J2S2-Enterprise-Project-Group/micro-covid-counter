import React, { useEffect, useState } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import UserList from './components/UserList/UserList';
import ActivityLogger from './components/ActivityLogger/ActivityLogger';
import UserDashboard from './components/UserDashboard/UserDashboard';
import { Auth } from 'aws-amplify';
import { CognitoUserInterface } from '@aws-amplify/ui-components';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import CreateGroupForm from './components/CreateGroupForm/CreateGroupForm';
interface IAppContainer {
}

export const App: React.FC<IAppContainer> = (): JSX.Element => {
  const [user, setUser] = useState<CognitoUserInterface | undefined>(undefined);

  useEffect(() => {
    getUser().then(userData => {
      setUser(userData)
    });
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
          <Container maxWidth="lg" style={{marginTop:'5%'}}>
            <Typography variant="h3" gutterBottom>{user ? "Welcome, " + user.attributes.name : null}</Typography>
            <Switch>
              <Route exact path="/" component={() => <Landing isLoggedIn={user !== undefined} />} />
              {user && <Route exact path="/activity/new" component={ActivityLogger} />}
              {user && <Route exact path="/dashboard" component={UserDashboard} />}
              {user && <Route exact path="/groups/create" component={CreateGroupForm} />}
              {user && <Route exact path="/people" component={UserList} />}
            </Switch>
          </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
