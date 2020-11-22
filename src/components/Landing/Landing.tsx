import React from 'react';
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
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
        <Typography variant="h3" gutterBottom>Track your covid risk and social bubble... sign in</Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Typography variant="h4" gutterBottom>How we compute risk:</Typography>
            <Typography variant="body1">Activity risk is the chance that an activity will transmit Covid-19 to you. Based on your recent activities in the past time window we compute your individual and social bubble risk levels.</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Landing;