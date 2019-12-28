
import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import HomeIcon from '@material-ui/icons/HomeOutlined';
import MenuIcon from '@material-ui/icons/MenuOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';

import { makeStyles } from '@material-ui/core/styles';

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

function TopNav() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolBar}>
      <IconButton className={classes.iconBar}>
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
      <IconButton className={classes.iconBar}>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </Toolbar>
  );
}

export default TopNav;
