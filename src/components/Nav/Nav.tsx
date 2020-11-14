import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreateIcon from '@material-ui/icons/Create';

function Nav() {
  return (
    <div className="Nav">
      <AppBar position="static">
        <Toolbar>
          <Grid
            justify="space-between"
            container
            spacing={3}
          >
            <Grid item>
              <Typography variant="h6" color="inherit">
                microCovid
              </Typography>
            </Grid>
            <Grid item>
              <IconButton aria-haspopup="true" color="inherit">
                <CreateIcon />
              </IconButton>
              <IconButton aria-haspopup="true" color="inherit">
                <AccountCircle />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
