import React, { useEffect, useState } from 'react';

import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';

interface INav {
}

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      flexGrow: 1,
    }
  })
);

export const Nav: React.FC<INav> = (): JSX.Element => {
  const [user, setUser] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
    <div className="Nav">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            microCovid
              </Typography>
          {user ? (
            <div>
              <IconButton aria-haspopup="true" color="inherit">
                <CreateIcon />
              </IconButton>
              <Button aria-haspopup="true" color="inherit" onClick={() => Auth.signOut()}>Log out</Button>
            </div>
          ) : (
              <Button aria-haspopup="true" color="inherit" onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}>Sign in</Button>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
