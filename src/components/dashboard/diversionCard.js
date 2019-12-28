import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import {
  Link,
} from 'react-router-dom';

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
  },
  number: {
    textAlign: 'center',
    fontSize: '60px',
    color: '#55B556',
  },
  centerCard: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
  },
}));


function DiversionCard(props) {
  const classes = useStyles();
  return (
    <Grid item md={4}>
      <div className={classes.centerCard}>
        <Link to="/category" className={classes.link}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {props.name}
              </Typography>
              <Typography className={classes.number}>
                {props.count}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </div>
    </Grid>
  );
}
export default DiversionCard;
