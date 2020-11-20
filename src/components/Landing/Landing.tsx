import React from 'react';
import { Redirect } from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import logo from '../../micro-covid-logo.png';

type ILanding = {
  isLoggedIn: boolean
}

export const Landing: React.FC<ILanding> = ({ isLoggedIn = false }): JSX.Element => {
  if (isLoggedIn) {
    return <Redirect to="/activity/new" />
  } else {
    return (
      <div>
        <Typography variant="h3" gutterBottom>Please sign in to microCovid</Typography>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Landing;