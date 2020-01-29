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
    minWidth: 275,
    minHeight: 150,
    backgroundColor: '#2F3849',
    boxShadow: 'none',
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: '#283040',
    },
  },
  cardNoLink: {
    maxWidth: 275,
    minWidth: 275,
    minHeight: 150,
    boxShadow: 'none',
    borderRadius: '0px',
    backgroundColor: '#2F3849',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    color: '#55B556',
    paddingTop: '10px',
  },
  number: {
    textAlign: 'center',
    fontSize: '60px',
    color: '#FFF',
  },
  centerCard: {

  },
  link: {
    textDecoration: 'none',
  },
}));

function DiversionContent(props) {
  const classes = useStyles();
  return (
    <Link to={props.link} className={classes.link}>
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
  );
}

function DiversionContentNoLink(props) {
  const classes = useStyles();
  return (
    <Card className={classes.cardNoLink}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography className={classes.number}>
          {props.count}
        </Typography>
      </CardContent>
    </Card>
  );
}


function DiversionCard(props) {
  const classes = useStyles();
  return (
    <Grid item md={4}>
      <div className={classes.centerCard}>
        {props.link
          ? (<DiversionContent {...props} />)
          : <DiversionContentNoLink {...props} />}
      </div>
    </Grid>
  );
}
export default DiversionCard;
