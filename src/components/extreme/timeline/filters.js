import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/core/styles';

const drugGroupOptions = [{ name: 'All Groups', value: -1 }, { name: 'Hydromorphone', value: 1 }, { name: 'Option #2', value: 2 }, { name: 'Option #3', value: 3 }];
const singleDrugOptions = [{ name: 'All Drugs', value: -1 }, { name: 'Option #1', value: 1 }, { name: 'Option #2', value: 2 }, { name: 'Option #3', value: 3 }];
const timeOptions = [{ name: '4 Weeks', value: 28 }, { name: '12 Weeks', value: 182 }, { name: '1 Year', value: 365 }, { name: '2 Years', value: 730 }];

function Filters() {
  const [formVal, setState] = useState({ drugGroups: -1, singleDrug: -1, timePeriod: 28 });
  const classes = makeStyles((theme) => ({
  	inputLabel: {
  		display: 'inline-flex',
  		fontSize: '14px',
  		fontWeight: 'bold',
  	},
  	select: {
  		marginLeft: '15px',
  		minWidth: '150px',
  		marginRight: '15px',
  	},
  	box: {
  		margin: '0px',
  		padding: '0px',
  	},
  }))();

  const updateField = (e) => {
    setState({ ...formVal, [e.target.name]: e.target.value });
  };


  return (
    <form noValidate autoComplete="off">
      <Box className={classes.box} display="flex" flexDirection="row" p={1} m={1}>
        <Box p={1}>
          <InputLabel className={classes.inputLabel} htmlFor="drug-groups">Drug Groups</InputLabel>
          <Select className={classes.select} id="drug-groups" name="drugGroups" value={formVal.drugGroups} onChange={updateField}>
            {drugGroupOptions.map((o) => (<MenuItem key={o.value} value={o.value}>{o.name}</MenuItem>))}
          </Select>
        </Box>
        <Box p={1}>
          <InputLabel className={classes.inputLabel} htmlFor="single-drug">Single Drug</InputLabel>
          <Select className={classes.select} id="single-drug" name="singleDrug" value={formVal.singleDrug} onChange={updateField}>
            {singleDrugOptions.map((o) => (<MenuItem key={o.value} value={o.value}>{o.name}</MenuItem>))}
          </Select>
        </Box>
        <Box p={1}>
          <InputLabel className={classes.inputLabel} htmlFor="single-drug">Time Period</InputLabel>
          <Select className={classes.select} id="time-period" name="timePeriod" value={formVal.timePeriod} onChange={updateField}>
            {timeOptions.map((o) => (<MenuItem key={o.value} value={o.value}>{o.name}</MenuItem>))}
          </Select>
        </Box>
      </Box>
    </form>
  );
}

export default Filters;
