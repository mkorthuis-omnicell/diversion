import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FilterListIcon from '@material-ui/icons/FilterList';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  menuIcon: {
    color: '#ECFBEA',
  },
  secondBar: {
    backgroundColor: '#54B353',
    minHeight: '35px',
  },
  secondIconBar: {
    padding: '0px 0px 0px 10px',
  },
  client: {
    paddingLeft: '40px',
  },

}));

function SecondNav() {
  const classes = useStyles();
  return (
    <Toolbar className={classes.secondBar}>
      <Typography className={classes.client}>
              Three Rivers Hospital
      </Typography>
      <IconButton className={classes.secondIconBar}>
        <FilterListIcon className={classes.menuIcon} />
      </IconButton>
    </Toolbar>
  );
}

export default SecondNav;
