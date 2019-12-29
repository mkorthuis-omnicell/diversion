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
    maxWidth: 250,
    minWidth: 250,
    minHeight: 150,
    borderColor: '#54B353',
    boxShadow: '0px 2px 10px -1px rgba(84,179,83,0.2), 0px 1px 1px 0px rgba(84,179,83,0.14), 0px 1px 3px 0px rgba(84,179,83,0.12)',
    '&:hover': {
      backgroundColor: '#F6F6F6',
    },
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#54B353',
    paddingLeft: '70px',
    paddingRight: '70px',
  },
  centerCard: {
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  image: {
    height: '90px',
  },
  div: {
    textAlign: 'center',
    padding: '15px',
  },
}));


const DivCardContent = function (props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <div className={classes.div}>
          <img className={classes.image} src={process.env.PUBLIC_URL + props.image} alt="" />
        </div>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

const DivCardLink = function (props) {
  const classes = useStyles();
  return props.link ? <Link to={props.link} className={classes.link}><DivCardContent {...props} /></Link> : <DivCardContent {...props} />;
};

function DiversionCard(props) {
  const classes = useStyles();

  return (
    <Grid item md={4}>
      <div className={classes.centerCard}>
        <DivCardLink {...props} />
      </div>
    </Grid>
  );
}
export default DiversionCard;
