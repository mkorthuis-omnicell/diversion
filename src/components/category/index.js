import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';


import { makeStyles } from '@material-ui/core/styles';
import TitleBar from '../common/titleBar';
import UserCard from './userCard';
import UserTable from './userTable';
import UsageKey from '../common/usageKey';


const useStyles = makeStyles((theme) => ({
  verticalLine: {
  	borderLeft: '1px solid #DDDDDD',
  	height: '300px',
  	marginLeft: '20px',
  	marginRight: '20px',
  },
}));

function createData(user, score, type, usage, nullVal, trend) {
  return {
    user, score, type, usage, nullVal, trend,
  };
}

const rows = [
  createData('Sally O\'Malley', 'Extreme', 'Nurse', '#CD130A', '#FFC444', '/image/up.png'),
  createData('John Smith', 'Extreme', 'Nurse', '#CD130A', '#FFC444', '/image/up-down.png'),
];


const UserCards = function (props) {
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      justify="center"
    >
      {props.rows.map((item) => <UserCard row={item} key={item.user} />)}
    </Grid>
  );
};

function Category() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <TitleBar name="High and Extreme Users" icon="/image/diversion-logo.png" />
      <Hidden smDown>
        <Box display="flex" p={1}>
          <Box p={1} flexGrow={1}>
            <UserTable rows={rows} />
          </Box>
          <Box p={1}>
            <div className={classes.verticalLine} />
          </Box>
          <Box p={1}>
            <UsageKey />
          </Box>
        </Box>
      </Hidden>
      <Hidden mdUp>
        <UserCards rows={rows} />
      </Hidden>
    </Container>
  );
}


export default Category;
