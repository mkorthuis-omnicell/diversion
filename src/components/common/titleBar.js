import React from 'react';

import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleBox: {
    paddingTop: '30px',
    marginBottom: '20px',
  },
  logo: {
    paddingBottom: '0px',
  },
  logoImage: {
    width: '40px',
    height: '40px',
  },
  titleText: {
    borderBottom: '1px solid #54B353',
    fontWeight: '500',
    padding: '20px 0px 10px 0px',
    marginBottom: '5px',
  },
}));

function TitleBar(props) {
  const classes = useStyles();
  return (
    <Box display="flex" p={1} className={classes.titleBox}>
      <Box p={1} className={classes.logo}>
        <img src={process.env.PUBLIC_URL + props.icon} className={classes.logoImage} alt="" />
      </Box>
      <Box p={1} flexGrow={1} className={classes.titleText}>
        {props.name}
      </Box>
    </Box>
  );
}

export default TitleBar;
