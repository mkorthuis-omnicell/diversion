import React from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';

import { withStyles, makeStyles } from '@material-ui/core/styles';

import TitleBar from '../common/titleBar';

function createDetails(rank, date, type, beforeQty, transQty, afterQty, user, patient) {
  return {
    rank, date, type, beforeQty, transQty, afterQty, user, patient,
  };
}

/** Start Dummy Data * */
const detailsOne = [
  createDetails(1, '9/18/2019 5:50 PM', 'Restock - Normal', '10', '5', '15', 'Phil Pharmacy', 'Patricia Patient'),
  createDetails(2, '9/24/2019 5:02 PM', 'Issue', '15', '4', '11', 'Nancy Nurse', 'Patricia Patient'),
  createDetails(3, '10/5/2019 10:38 AM', 'Discrepancy (OVER)', '11', '1', '12', 'Phil Pharmacy', 'Patricia Patient'),
  createDetails(4, '10/5/2019 10:38 AM', 'Restock - Normal', '12', '1', '13', 'Phil Pharmacy', 'Patricia Patient'),
];

const detailsTwo = [
  createDetails(1, '9/29/2019 4:56 PM', 'Null - Skipped count back', '5', 'N/A', '5', 'Paula Tech', 'Patricia Patient'),
  createDetails(2, '9/30/2019 4:40 PM', 'Null - Skipped count back', '5', 'N/A', '5', 'Paula Tech', 'Patricia Patient'),
  createDetails(3, '9/21/2019 9:31 PM', 'Discrepancy (UNDER)', '5', '3', '2', 'Sherill Linkon', 'Patricia Patient'),
  createDetails(4, '9/21/2019 9:31 PM', 'Cycle Count', '2', '2', '2', 'Sherill Linkon', 'Patricia Patient'),
];

const unresolvedSet = [{
  rank: 1, title: 'Time since discrepancy: 12 days', med: 'oxyCODONE immediate release (ROXICODONE) 5mg Tab', bin: 'Bin 33404', details: detailsOne,
},
{
  rank: 2, title: 'Time since discrepancy: 25 Days', med: 'ePHEDrine 50mg/1mL 1mL', bin: 'Bin 9', details: detailsTwo,
}];
/** End Dummy Data * */

function DiscrepancyTable(props) {
  const TimelineTableCell = withStyles((theme) => ({
    head: {
  		fontSize: '12px',
  		color: '#666666',
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
    },
  }))(TableCell);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TimelineTableCell>Date / Time</TimelineTableCell>
          <TimelineTableCell>Transaction Type</TimelineTableCell>
          <TimelineTableCell>Bin Qty Before</TimelineTableCell>
          <TimelineTableCell>Transaction Quanity</TimelineTableCell>
          <TimelineTableCell>Bin Qty After</TimelineTableCell>
          <TimelineTableCell>User</TimelineTableCell>
          <TimelineTableCell>Patient</TimelineTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.details.map((detail) => (
          <TableRow key={detail.rank} style={detail.rank % 2 ? { background: 'rgba(0, 0, 0, 0.03)' } : { background: '#FFFFFF' }}>
            <TimelineTableCell>{detail.date}</TimelineTableCell>
            <TimelineTableCell>{detail.type}</TimelineTableCell>
            <TimelineTableCell>{detail.beforeQty}</TimelineTableCell>
            <TimelineTableCell>{detail.transQty}</TimelineTableCell>
            <TimelineTableCell>{detail.afterQty}</TimelineTableCell>
            <TimelineTableCell>{detail.user}</TimelineTableCell>
            <TimelineTableCell>{detail.patient}</TimelineTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function DiscrepancyTitle(props) {
  const classes = makeStyles((theme) => ({
  	binText: {
  		color: '#54B353',
  		fontSize: '14px',
  	},
  	titleText: {
  		fontSize: '14px',
  		color: 'rgb(255, 140, 58)',
  		fontWeight: 'bold',
  	},
  	medText: {
  		paddingTop: '0px',
  		paddingBottom: '16px',
  	},
  	mainBox: {
  		padding: '0px',
  		margin: '0px',
  	},
  }))();
  return (
    <Box>
      <Box display="flex" p={1} className={classes.mainBox}>
        <Box p={1} flexGrow={1} className={classes.titleText}>{props.title}</Box>
        <Box p={1} className={classes.binText}>{props.bin}</Box>
      </Box>
      <Box display="flex" p={1} className={classes.mainBox}>
        <Box p={1} flexGrow={1} className={classes.medText}>{props.med}</Box>
      </Box>
    </Box>
  );
}

function DiscrepancyDetails(props) {
  const { unresolved } = props;
  const classes = makeStyles((theme) => ({
  	paper: {
  		padding: '10px',
  		marginTop: '30px',
  	},
  }))();
  return (
    <Paper elevation={3} className={classes.paper}>
      <DiscrepancyTitle title={unresolved.title} med={unresolved.med} bin={unresolved.bin} />
      <DiscrepancyTable details={unresolved.details} />
    </Paper>
  );
}

function Discrepancy() {
  return (
    <Container maxWidth="xl">
      <TitleBar name="Unresolved Discrepancies" icon="/image/diversion-logo.png" />
      { unresolvedSet.map((unresolved) => <DiscrepancyDetails unresolved={unresolved} key={unresolved.rank} />) }
    </Container>
  );
}

export default Discrepancy;
