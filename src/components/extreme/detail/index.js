import React from 'react';


import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import TitleBar from '../../common/titleBar';
import UsageKey from '../../common/usageKey';
import DetailTable from './detailTable';

const useStyles = makeStyles((theme) => ({
  verticalLine: {
  	borderLeft: '1px solid #5E6A71',
  	height: '300px',
  	marginLeft: '20px',
  	marginRight: '20px',
  },
  deskDiv: {

  },
  noPadding: {
    padding: '0px',
    margin: '0px',
  },
}));

/** START SAMPLE DATA */
function createData(name, usage, nullVal, detail) {
  return {
    name, usage, nullVal, detail,
  };
}

const detailHydro = [
  {
    type: 'usage', name: 'HYDROmorphone (PF) (DILAUDID) 1mg/1mL 1mL Inj Sol', perShift: '20', peerPerShift: '10', trend: '/image/up.png',
  },
  {
    type: 'null', name: 'HYDROmorphone 4mg Tab', perShift: '1.5', peerPerShift: '0.1', trend: '/image/up-down.png',
  },
];

const detailDiphen = [
  {
    type: 'null', name: 'Diphenhydramine (BENADRYL) CAP 25mg', perShift: '20', peerPerShift: '0.3', trend: '/image/up.png',
  },
];

const rows = [
  createData('Hydromorphone', '#CD130A', '#FFC444', detailHydro),
  createData('Diphenhydramine', '#46B555', '#FF8C3A', detailDiphen),
];
/** END SAMPLE DATA */

const UserDesktop = function (props) {
  const classes = makeStyles((theme) => ({
  	paper: {
  		padding: '15px;',
      borderRadius: '0px',
      background: '#283040',
      boxShadow: 'none',
      color: '#FFF',
  	},
  	user: {
  		fontSize: '20px',
  		fontWeight: '500',
      color: '#46B555',
  	},
  	title: {
  		fontSize: '16px',
      color: '#FFF',
  		paddingBottom: '30px',
  	},
  }))();
  return (
    <Paper elevation={3} className={classes.paper}>
      <div>
        <div className={classes.user}>Sally O'Malley</div>
        <div className={classes.title}>Nurse</div>
      </div>
      <DetailTable rows={rows} />
    </Paper>
  );
};

const UserMobile = function (props) {
  return (<div>TODO MOBILE</div>);
};

function Detail() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <TitleBar name="Excessive Users > User Detail" />
      <Hidden smDown>
        <Box display="flex" p={1} className={classes.noPadding}>
          <Box p={1} flexGrow={1} className={classes.noPadding}>
            <UserDesktop rows={rows} />
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
        <UserMobile rows={rows} />
      </Hidden>
    </Container>
  );
}

export default Detail;
