import React from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


import { makeStyles, withStyles } from '@material-ui/core/styles';

import TitleBar from '../../common/titleBar';
import Filters from './filters';


/* START TEST DATA */
function createData(rank, user, type, time, drug, issue, waste, returnTime) {
  return {
    rank, user, type, time, drug, issue, waste, returnTime,
  };
}
const patientDetails = [
  createData(1, 'Sally O\'Malley', 'Nurse', '8/8/2015 10:56:49 PM WSO4PWRXA', 'HYDROmorphone (DILAUDI) 2mg/1mL Inj Sol 3MG, Q2H PRN 100473501', '4 mg (+2h 10m)', '1 mg (+1h 23m) Sonya Hilenbrand', ''),
  createData(2, 'Sally O\'Malley', 'Nurse', '8/9/2015 1:40:15 AM WSO4PWRXB', 'HYDROmorphone (DILAUDI) 2mg/1mL Inj Sol 3MG, Q2H PRN 100473501', '4 mg (+2h 44m)', '1 mg (+7m) Sonya Hilenbrand', ''),
  createData(3, 'Sally O\'Malley', 'Nurse', '8/9/2015 4:06:02 AM WSO4PWRXA', 'HYDROmorphone (DILAUDI) 2mg/1mL Inj Sol 3MG, Q2H PRN 100473501', '4 mg (+2h 26m)', '1 mg (+44m) Gertrudis Canavan', ''),
  createData(4, 'Sally O\'Malley', 'Nurse', '8/9/2015 7:49:39 AM WSO4PWRXB', 'HYDROmorphone (DILAUDI) 2mg/1mL Inj Sol 3MG, Q2H PRN 100473501', '4 mg (+3h 35m)', '1 mg (+2m) Julianne Dehaven', ''),
];
/* END TEST DATA */


function PatientInfo() {
  const classes = makeStyles((theme) => ({
  	box: {
  		padding: '0px',
  	},
  	identifier: {
  		fontSize: '12px',
  		color: '#FFFFFF',
  		fontWeight: 'bold',
  	},
    content: {
      color: '#46B555',
    },
  }))();
  return (
    <Box className={classes.box} display="flex" flexDirection="row" p={1} m={1}>
      <Box p={1}>
        <div>
          <div className={classes.identifier}>Patient</div>
          <div className={classes.content}>BENBOOM, JANEE</div>
        </div>
      </Box>
      <Box p={1}>
        <div>
          <div className={classes.identifier}>Id</div>
          <div className={classes.content}>0177725645</div>
        </div>
      </Box>
      <Box p={1}>
        <div>
          <div className={classes.identifier}>MRN</div>
          <div className={classes.content}>9526267</div>
        </div>
      </Box>
    </Box>
  );
}

function PatientTable() {
  const TimelineTableCell = withStyles((theme) => ({
    head: {
  		fontSize: '12px',
  		color: '#FFFFFF',
  		fontWeight: 'bold',
  		textAlign: 'left',
  		padding: '0px 0px 0px 10px',
    },
    body: {
    	minWidth: '100px',
	  	padding: '10px 0px 10px 10px',
	    fontSize: '12px',
	  	textAlign: 'left',
	    border: '0px',
      color: '#FFF',
    },
  }))(TableCell);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TimelineTableCell>User</TimelineTableCell>
          <TimelineTableCell>Type</TimelineTableCell>
          <TimelineTableCell>Time / Cabinet</TimelineTableCell>
          <TimelineTableCell>Drug / Med Order</TimelineTableCell>
          <TimelineTableCell>Issue Amount</TimelineTableCell>
          <TimelineTableCell>Waste</TimelineTableCell>
          <TimelineTableCell>Return</TimelineTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {patientDetails.map((patientDetail) => (
          <TableRow key={patientDetail.rank} style={patientDetail.rank % 2 ? { background: '#283040' } : { background: '#2F3849' }}>
            <TimelineTableCell>{patientDetail.user}</TimelineTableCell>
            <TimelineTableCell>{patientDetail.type}</TimelineTableCell>
            <TimelineTableCell>{patientDetail.time}</TimelineTableCell>
            <TimelineTableCell>{patientDetail.drug}</TimelineTableCell>
            <TimelineTableCell>{patientDetail.issue}</TimelineTableCell>
            <TimelineTableCell>{patientDetail.waste}</TimelineTableCell>
            <TimelineTableCell>{patientDetail.returnTime}</TimelineTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function PatientCareDetails() {
  const classes = makeStyles((theme) => ({
  	paper: {
  		padding: '10px',
  		marginTop: '30px',
      borderRadius: '0px',
      boxShadow: 'none',
      backgroundColor: '#2F3849',
  	},
  }))();
  return (
    <Paper elevation={3} className={classes.paper}>
      <PatientInfo />
      <PatientTable />
    </Paper>
  );
}


function Timeline() {
  return (
    <Container maxWidth="xl">
      <TitleBar name="Excessive Users > Patient Care Timeline" />
      	<Filters />
      	<PatientCareDetails />
    </Container>
  );
}

export default Timeline;
