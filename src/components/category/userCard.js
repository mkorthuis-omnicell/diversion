import React from 'react';

import {
  Link,
} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 275,
    minWidth: 275,
    minHeight: 150,
    boxShadow: '0px 2px 10px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#F6F6F6',
    },
  },
  title: {
    textAlign: 'center',
    borderBottom: '1px solid #CCCCCC',
    marginBottom: '8px',
    paddingBottom: '5px',
  },
  content: {
    fontSize: '14px',
  },
  centerCard: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  image: {
    height: '30px',
    width: '80px',
  },
}));

function UserCard(props) {
  const classes = useStyles();
  return (
    <Grid item md={4}>
      <div className={classes.centerCard}>
        <Link to="/details" className={classes.link}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title}>
                <strong>{props.row.user}</strong>
              </Typography>
              <Typography className={classes.content}>
                <strong>Score:</strong>
                {' '}
                {props.row.score}
              </Typography>
              <Typography className={classes.content}>
                <strong>Type:</strong>
                {' '}
                {props.row.type}
              </Typography>
              <Typography className={classes.content}>
                <strong>Usage:</strong>
                <FiberManualRecordIcon fontSize="small" style={{ color: props.row.usage }} />
              </Typography>
              <Typography className={classes.content}>
                <strong>Null:</strong>
                <FiberManualRecordIcon fontSize="small" style={{ color: props.row.nullVal }} />
              </Typography>
              <Typography className={classes.content}>
                <strong>Trend:</strong>
                {' '}
                <img src={process.env.PUBLIC_URL + props.row.trend} className={classes.image} alt="" />
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    </Grid>
  );
}

export default UserCard;
