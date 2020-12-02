import React, { useEffect, useState } from 'react';

import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { Link } from 'react-router-dom';
import './Nav.css';
import clsx from 'clsx';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

interface INav {
}
const drawerWidth = 240;

export const Nav: React.FC<INav> = (): JSX.Element => {
  // Creating Theme Variable
  const theme = useTheme();

  // Creating Style for the page
  const useStyles = makeStyles(() =>
    createStyles({
      title: {
        flexGrow: 1
      },
      appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      hide: {
        display: 'none',
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      drawer: {
        width: 0,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        justifyContent: 'flex-end',
      },
    })
  );

  const [user, setUser] = useState(null);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="Nav">
      <AppBar position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>

              {[
                { text: 'Activity Log', icon: EventAvailableIcon, url: '/activity/new' },
                { text: 'Dashboard', icon: DashboardIcon, url: '/dashboard' },
                { text: 'Groups', icon: GroupWorkIcon, url: '/groups' },
                { text: 'People', icon: PeopleAltIcon, url: '/people' }].map((item, index) => (
                  <ListItem button key={index} component={Link} to={item.url}>
                    <ListItemIcon><item.icon /></ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
            </List>
          </Drawer>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <Link to="/" className="navLink">
              microCovid
            </Link>
          </Typography>
          {user ? (
            <Button aria-haspopup="true" color="inherit" onClick={() => Auth.signOut()}>Log out</Button>
          ) : (
            <Button aria-haspopup="true" color="inherit" onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}>Sign in</Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
