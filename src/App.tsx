import React, { useEffect, useState } from 'react';
import logo from './micro-covid-logo.png';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Nav from './components/Nav/Nav';
import CreateActivityForm from './components/CreateActivityForm/CreateActivityForm';
import { Auth } from 'aws-amplify';
import { CognitoUserInterface } from '@aws-amplify/ui-components';

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
      <Nav />
      <Container maxWidth="lg">
        {user ? (
          <div>
            <Typography variant="h3" gutterBottom>Welcome, {user.attributes.name}</Typography>
            <CreateActivityForm />
          </div>
        ) : (
          <div>
            <Typography variant="h3" gutterBottom>Please sign in to microCovid</Typography>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
        )}
      </Container>
    </div>
  );
}

export default App;
