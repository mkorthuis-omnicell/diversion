import React from 'react';

import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleBox: {
    marginBottom: '0px',
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  titleText: {
    fontSize: '24px',
    fontWeight: '500',
    color: '#55B556',
    padding: '20px 0px 10px 0px',
    marginBottom: '5px',
  },
}));

function TitleBar(props) {
  const classes = useStyles();
  return (
    <Box display="flex" p={1} className={classes.titleBox}>
      <Box p={1} flexGrow={1} className={classes.titleText}>
        {props.name}
      </Box>
    </Box>
  );
}

export default TitleBar;
