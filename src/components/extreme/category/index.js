import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';


import { makeStyles } from '@material-ui/core/styles';
import TitleBar from '../../common/titleBar';
import UserCard from './userCard';
import UserTable from './userTable';
import UsageKey from '../../common/usageKey';


const useStyles = makeStyles((theme) => ({
  verticalLine: {
  	borderLeft: '1px solid #5E6A71',
  	height: '300px',
  	marginLeft: '20px',
  	marginRight: '20px',
  },
  noPadding: {
    padding: '0px',
    margin: '0px',
  },
}));

function createData(user, score, type, usage, nullVal, trend, rank) {
  return {
    user, score, type, usage, nullVal, trend, rank,
  };
}

const rows = [
  createData('Sally O\'Malley', 'Extreme', 'Nurse', '#CD130A', '#FFC444', '/image/up.png', 1),
  createData('John Smith', 'Extreme', 'Nurse', '#CD130A', '#FFC444', '/image/up-down.png', 2),
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
    <Container maxWidth="xl">
      <TitleBar name="Excessive Users" />
      <Hidden smDown>
        <Box display="flex" p={1} className={classes.noPadding}>
          <Box p={1} flexGrow={1} className={classes.noPadding}>
            <UserTable rows={rows} />
          </Box>
          <Box p={1} className={classes.noPadding}>
            <div className={classes.verticalLine} />
          </Box>
          <Box p={1} className={classes.noPadding}>
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
