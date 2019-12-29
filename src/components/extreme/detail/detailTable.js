
import React from 'react';

import { useHistory } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { makeStyles } from '@material-ui/core/styles';


const usageFields = {
  name: 'Usage', perShift: 'Avg Qty Per Shift', peerPerShift: 'Peer Avg Qty Per Shift', trend: 'Trend',
};
const nullFields = {
  name: 'Null', perShift: 'Avg Nulls Per Shift', peerPerShift: 'Peer Avg Null Per Shift', trend: 'Trend',
};

const DetailRow = function (props) {
  const { row, fields, color } = props;
  const classes = makeStyles((theme) => ({
  	detailCell: {
  		border: '0px',
  		paddingTop: '0px',
  		paddingBottom: '0px',
  		verticalAlign: 'top',
  		cursor: 'pointer',
  	},
  	title: {
  		fontSize: '12px',
  		color: '#666666',
  		fontWeight: 'bold',
  	},
  	titleCenter: {
  		fontSize: '12px',
  		color: '#666666',
  		fontWeight: 'bold',
  		textAlign: 'center',
  	},
  	detail: {
  		fontSize: '12px',
  		paddingTop: '5px',
  	},
  	detailCenter: {
  		fontSize: '12px',
  		textAlign: 'center',
  		paddingTop: '5px',
  	},
  	imageCenter: {
  		textAlign: 'center',
  	},
  	image: {
      height: '30px',
      width: '80px',
    },
  }))();

  const getColor = function (colorVal) {
  	return colorVal ? { color: colorVal } : {};
  };

  const history = useHistory();
  const handleClick = (event, name) => {
    history.push('/timeline');
  };

  return (
    <TableRow hover onClick={(event) => handleClick(event, row.name)}>
      <TableCell className={classes.detailCell}>
        <div className={classes.title}>{fields.name}</div>
        <div className={classes.detail}>{row.name}</div>
      </TableCell>
      <TableCell className={classes.detailCell}>
        <div className={classes.titleCenter}>{fields.perShift}</div>
        <div className={classes.detailCenter} style={getColor(color)}>{row.perShift}</div>
      </TableCell>
      <TableCell className={classes.detailCell}>
        <div className={classes.titleCenter}>{fields.peerPerShift}</div>
        <div className={classes.detailCenter}>{row.peerPerShift}</div>
      </TableCell>
      <TableCell className={classes.detailCell}>
        <div className={classes.titleCenter}>{fields.trend}</div>
        <div className={classes.imageCenter}><img src={process.env.PUBLIC_URL + row.trend} className={classes.image} alt="" /></div>
      </TableCell>
    </TableRow>
  );
};

const DetailTable = function (props) {
  const classes = makeStyles((theme) => ({
  	headerCell: {
  		fontSize: '12px',
  		color: '#666666',
  		fontWeight: 'bold',
  		padding: '0px',
  		textAlign: 'center',
  	},
  	firstMainCell: {
  		fontSize: '16px',
  		backgroundColor: 'rgba(0, 0, 0, 0.03)',
  		borderBottom: '0px',
  	},
    mainCell: {
  		textAlign: 'center',
  		backgroundColor: 'rgba(0, 0, 0, 0.03)',
  		borderBottom: '0px',
  	},
  	emptyCell: {
  		border: '0px',
  	},
  }))();
  return (

    <Table>
      {props.rows.map((row) => (
        <TableBody key={row.name}>
          <TableRow>
            <TableCell className={classes.headerCell} />
            <TableCell className={classes.headerCell} />
            <TableCell className={classes.headerCell}>Usage</TableCell>
            <TableCell className={classes.headerCell}>Null</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.firstMainCell}>{row.name}</TableCell>
            <TableCell className={classes.mainCell} />
            <TableCell className={classes.mainCell}><FiberManualRecordIcon style={{ color: row.usage }} /></TableCell>
            <TableCell className={classes.mainCell}><FiberManualRecordIcon style={{ color: row.nullVal }} /></TableCell>
          </TableRow>
          <TableRow>
            {[...Array(4)].map((e, i) => <TableCell className={classes.emptyCell} key={i} />)}
          </TableRow>
          {row.detail.map((detailRow) => (
            <DetailRow row={detailRow} fields={detailRow.type === 'usage' ? usageFields : nullFields} color={detailRow.type === 'usage' ? row.usage : row.nullVal} key={detailRow.name} />
          ))}
          <TableRow>
            {[...Array(4)].map((e, i) => <TableCell className={classes.emptyCell} key={i} />)}
          </TableRow>
        </TableBody>
      ))}
    </Table>
  );
};

export default DetailTable;
