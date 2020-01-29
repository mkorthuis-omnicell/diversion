import React from 'react';

import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FilterListIcon from '@material-ui/icons/FilterList';
import Box from '@material-ui/core/Box';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import TitleBar from '../common/titleBar';

function createData(rank, date, user, item, control, medOrder, issue, wasteAmount, patient, wasteReason, wasteWitness) {
  return {
    rank, date, user, item, control, medOrder, issue, wasteAmount, patient, wasteReason, wasteWitness,
  };
}
const wasteDetails = [
  createData(1, '9/25/2019 10:54 AM', 'Cara Sellner', 'HYDROmorphone (DILAUDID) 4mg Tab', '2', 'HYDROmorphone (DILAUDID) 4mg Tab, 8 MG, Q12H PRN 10234976', '8mg', '8mg', 'Tanya Hershey', 'Dropped on the floor', 'Paul Right'),
];


function WasteTable() {
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
      color: '#FFFFFF',
    },
  }))(TableCell);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TimelineTableCell>Date / Time</TimelineTableCell>
          <TimelineTableCell>User</TimelineTableCell>
          <TimelineTableCell>Item</TimelineTableCell>
          <TimelineTableCell>Control</TimelineTableCell>
          <TimelineTableCell>Med Order</TimelineTableCell>
          <TimelineTableCell>Issue Amt</TimelineTableCell>
          <TimelineTableCell>Waste Amt</TimelineTableCell>
          <TimelineTableCell>ID and Name</TimelineTableCell>
          <TimelineTableCell>Waste Reason</TimelineTableCell>
          <TimelineTableCell> Witness</TimelineTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {wasteDetails.map((wasteDetail) => (
          <TableRow key={wasteDetail.rank} style={wasteDetail.rank % 2 ? { background: '#283040' } : { background: '#2F3849' }}>
            <TimelineTableCell>{wasteDetail.date}</TimelineTableCell>
            <TimelineTableCell>{wasteDetail.user}</TimelineTableCell>
            <TimelineTableCell>{wasteDetail.item}</TimelineTableCell>
            <TimelineTableCell>{wasteDetail.control}</TimelineTableCell>
            <TimelineTableCell>{wasteDetail.medOrder}</TimelineTableCell>
            <TimelineTableCell>{wasteDetail.issue}</TimelineTableCell>
            <TimelineTableCell>{wasteDetail.wasteAmount}</TimelineTableCell>
            <TimelineTableCell>{wasteDetail.patient}</TimelineTableCell>
            <TimelineTableCell>{wasteDetail.wasteReason}</TimelineTableCell>
            <TimelineTableCell>{wasteDetail.wasteWitness}</TimelineTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const Filters = function () {
  const classes = makeStyles((theme) => ({
  	text: {
  		fontSize: '14px',
  		color: '#FFFFFF',
  		padding: '0px 10px 0px 0px',
  		margin: '0px',
  	},
  	icon: {
  		fontSize: '1rem',
      color: '#FFFFFF',
  	},
  	box: {
  		padding: '0px',
  		margin: '0px',
  	},
  	bigBox: {
  		padding: '0px',
  		margin: '0px 0px 20px 0px',
  	},
  }))();
  return (
    <Box className={classes.bigBox} display="flex" flexDirection="row-reverse" p={1} m={1}>
      <Box p={1} className={classes.box}>
        <FilterListIcon className={classes.icon} />
      </Box>
      <Box p={1} className={classes.text}>
Filter
      </Box>

    </Box>
  );
};

function WasteDetails() {
  const classes = makeStyles((theme) => ({
  	paper: {
  		padding: '10px',
      borderRadius: '0px',
      backgroundColor: '#2F3849',
      boxShadow: 'none',
  	},
  }))();
  return (
    <Paper elevation={3} className={classes.paper}>
      <Filters />
      <WasteTable />
    </Paper>
  );
}

function Waste() {
  return (
    <Container maxWidth="xl">
      <TitleBar name="Whole Dose Waste" icon="/image/diversion-logo.png" />
      	<WasteDetails />
    </Container>
  );
}

export default Waste;
