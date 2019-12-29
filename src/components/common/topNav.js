
import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import HomeIcon from '@material-ui/icons/HomeOutlined';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

import { makeStyles } from '@material-ui/core/styles';

import { useStore } from '../../store';

import { login } from '../../actions';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    minHeight: '30px',
  },
  iconBar: {
    padding: '10px',
  },
  grow: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
    color: '#55B556',
  },
  essentialsText: {
    paddingRight: '30px',
    color: '#ECFBEA',
  },
  settingsIcon: {
    color: '#ECFBEA',
  },
  menuIcon: {
    color: '#ECFBEA',
  },
  image: {
    height: '28px',
    paddingRight: '10px',
  },
}));

function NoLoginNav() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolBar}>
      <div className={classes.grow} />
      <IconButton className={classes.iconBar}>
        <img className={classes.image} src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="" />
      </IconButton>
      <Typography className={classes.essentialsText}>
              One Essentials
      </Typography>
    </Toolbar>
  );
}

function LoginNav() {
  const history = useHistory();
  const dispatch = useStore()[1];
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHome = (event) => {
    history.push('/feature');
  };

  const handleClose = () => {
    dispatch(login(false, 'You Have Logged Out'));
    history.push('/login');
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <Toolbar className={classes.toolBar}>
      <IconButton className={classes.iconBar} onClick={handleHome}>
        <HomeIcon className={classes.homeButton} />
      </IconButton>
      <div className={classes.grow} />
      <IconButton className={classes.iconBar}>
        <img className={classes.image} src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="" />
      </IconButton>
      <Typography className={classes.essentialsText}>
              One Essentials
      </Typography>
      <IconButton className={classes.iconBar}>
        <SettingsIcon className={classes.settingsIcon} />
      </IconButton>
      <IconButton className={classes.iconBar} onClick={handleClick}>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Toolbar>
  );
}


function TopNav() {
  const [{ loggedIn }] = useStore();
  return loggedIn ? <LoginNav /> : <NoLoginNav />;
}

export default TopNav;
