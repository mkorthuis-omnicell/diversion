import React from 'react';

import { useHistory } from 'react-router-dom';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { withStyles, makeStyles } from '@material-ui/core/styles';

const ContentTableCell = withStyles((theme) => ({
  head: {
    color: '#333333',
    fontWeight: 'bold',

    paddingTop: '8px',
    paddingBottom: '8px',
  },
  body: {
    fontSize: 14,
    paddingTop: '12px',
    paddingBottom: '12px',
    cursor: 'pointer',
  },
}))(TableCell);


const useStyles = makeStyles((theme) => ({
  tableContainer: {
    boxShadow: '0px 2px 10px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  image: {
    height: '30px',
    width: '80px',
  },
}));

function UserTable(props) {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = (event, name) => {
    history.push('/details');
  };

  return (
    <TableContainer className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <ContentTableCell>User</ContentTableCell>
            <ContentTableCell>Score</ContentTableCell>
            <ContentTableCell>User Type</ContentTableCell>
            <ContentTableCell>Usage</ContentTableCell>
            <ContentTableCell>Null</ContentTableCell>
            <ContentTableCell>Trend</ContentTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow hover key={row.user} onClick={(event) => handleClick(event, row.name)}>
              <ContentTableCell>{row.user}</ContentTableCell>
              <ContentTableCell>{row.score}</ContentTableCell>
              <ContentTableCell>{row.type}</ContentTableCell>
              <ContentTableCell>
                <FiberManualRecordIcon style={{ color: row.usage }} />
              </ContentTableCell>
              <ContentTableCell><FiberManualRecordIcon style={{ color: row.nullVal }} /></ContentTableCell>
              <ContentTableCell>
                <img src={process.env.PUBLIC_URL + row.trend} className={classes.image} alt="" />
              </ContentTableCell>
            </TableRow>
      	))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserTable;
