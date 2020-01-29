
import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/MenuOutlined';

import { makeStyles } from '@material-ui/core/styles';

import { useStore } from '../../store';

import { login } from '../../actions';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    minHeight: '64px',
    background: '#2F3849',
  },
  iconBar: {
    padding: '10px',
    paddingTop: '0px',
    paddingBottom: '0px',
    '&:hover': {
      backgroundColor: 'initial',
    },
  },
  grow: {
    flexGrow: 1,
  },
  homeButton: {
    marginRight: theme.spacing(2),
    color: '#55B556',
  },
  linkText: {
    paddingLeft: '40px',
    paddingRight: '40px',
    color: '#F8F8F9',
    fontSize: '16px',
    textTransform: 'none',
    height: '56px',
    transition: 'none',
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: 'initial',
      borderTop: '4px solid #2F3849',
      borderBottom: '4px solid #46B555',
    },
  },
  logoffLink: {
    borderLeft: '1px solid #5E6A71',
    borderRight: '1px solid #5E6A71',
    transition: 'none',
    borderRadius: '0px',
    height: '56px',
    textTransform: 'none',
    marginRight: '20px',
    '&:hover': {
      backgroundColor: 'initial',
      borderTop: '4px solid #2F3849',
      borderBottom: '4px solid #46B555',
    },
  },
  logoff: {
    width: '100px',
    textAlign: 'center',
    color: '#F8F8F9',
    fontSize: '16px',
    lineHeight: '1',
  },
  logoffName: {
    textAlign: 'center',
    color: '#F8F8F9',
    fontSize: '10px',
    lineHeight: '1',
  },

  settingsIcon: {
    color: '#ECFBEA',
  },
  menuIcon: {
    color: '#ECFBEA',
  },
  imageIcon: {
    height: '50px',
    paddingRight: '10px',
  },
  imageText: {
    height: '16px',
    paddingRight: '30px',
  },
}));

function NoLoginNav() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolBar}>
      <IconButton className={classes.iconBar} disableRipple>
        <img className={classes.imageIcon} src={`${process.env.PUBLIC_URL}/image/LogoOnly_Green.svg`} alt="" />
        <img className={classes.imageText} src={`${process.env.PUBLIC_URL}/image/Product_OmnicellOne.svg`} alt="" />
      </IconButton>
      <div className={classes.grow} />
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

  const handleClose = () => {
    dispatch(login(false, 'You Have Logged Out'));
    history.push('/login');
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <Toolbar className={classes.toolBar}>
      <IconButton component={Link} to="/dashboard" className={classes.iconBar} disableRipple>
        <img className={classes.imageIcon} src={`${process.env.PUBLIC_URL}/image/LogoOnly_Green.svg`} alt="" />
        <img className={classes.imageText} src={`${process.env.PUBLIC_URL}/image/Product_OmnicellOne.svg`} alt="" />
      </IconButton>
      <Button component={Link} to="/category" className={classes.linkText} disableRipple>
                Excessive Users
      </Button>
      <Button component={Link} to="/discrepancy" className={classes.linkText} disableRipple>
              Unresolved Discrepancies
      </Button>
      <Button component={Link} to="/waste" className={classes.linkText} disableRipple>
              Whole Dose Waste
      </Button>
      <div className={classes.grow} />

      <Button onClick={handleClose} className={classes.logoffLink} disableRipple>
        <div>
          <div className={classes.logoff}>Log off</div>
          <div className={classes.logoffName}>Mallory Reyes</div>
        </div>
      </Button>
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
