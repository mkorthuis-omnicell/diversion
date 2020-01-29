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
    color: '#FFFFFF',
    fontWeight: 'bold',
    background: '#283040',
    paddingTop: '8px',
    paddingBottom: '8px',
    borderBottom: '0px',
  },
  body: {
    fontSize: 14,
    paddingTop: '12px',
    paddingBottom: '12px',
    cursor: 'pointer',
    color: '#FFFFFF',
    borderBottom: '0px',
  },
}))(TableCell);


const useStyles = makeStyles((theme) => ({
  tableContainer: {
    boxShadow: 'none',
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
            <TableRow hover key={row.user} onClick={(event) => handleClick(event, row.name)} style={row.rank % 2 ? { background: '#2F3849' } : { background: '#283040' }}>
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
