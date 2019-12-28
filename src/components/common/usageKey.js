import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  usageCard: {
  	minWidth: '140px',
  	backgroundColor: 'rgba(0, 0, 0, 0.03)',
  	fontSize: '12px',
  	paddingTop: '10px',
  },
  itemBuffer: {
  	paddingTop: '2px',
  },
}));

const UsageTypography = withStyles((theme) => ({
  root: {
    fontSize: '13px',
    display: 'inline',
    verticalAlign: 'top',
    paddingLeft: '3px',
  },
}))(Typography);

const UsageTitleTypography = withStyles((theme) => ({
  root: {
    fontSize: '14px',
    paddingBottom: '2px',
    fontWeight: 'bold',
    color: '#333333',
  },
}))(Typography);

function UsageKey(props) {
  const classes = useStyles();
  return (
    <Card>
      <CardContent className={classes.usageCard}>
        <UsageTitleTypography>Usage Key</UsageTitleTypography>
        <hr />
        <div className={classes.itemBuffer}>
          <FiberManualRecordIcon fontSize="small" style={{ color: '#CD130A' }} />
          <UsageTypography>Extreme</UsageTypography>
        </div>
        <div className={classes.itemBuffer}>
          <FiberManualRecordIcon fontSize="small" style={{ color: '#FF8C3A' }} />
          <UsageTypography>High</UsageTypography>
        </div>
        <div className={classes.itemBuffer}>
          <FiberManualRecordIcon fontSize="small" style={{ color: '#FFC444' }} />
          <UsageTypography>Moderate</UsageTypography>
        </div>
        <div className={classes.itemBuffer}>
          <FiberManualRecordIcon fontSize="small" style={{ color: '#54B353' }} />
          <UsageTypography>Normal</UsageTypography>
        </div>
      </CardContent>
    </Card>
  );
}

export default UsageKey;
