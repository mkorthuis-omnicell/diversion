import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import TitleBar from '../common/titleBar';
import Card from './diversionCard';


const cards = [
  { name: 'Excessive Users', count: '2', link: '/category' },
  { name: 'Unresolved Discrepancies', count: '2', link: 'discrepancy' },
  { name: 'Whole Dose Waste', count: '1', link: '/waste' },
];

const useStyles = makeStyles((theme) => ({
  grid: {
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <TitleBar name="Diversion Dashboard" icon="/image/diversion-logo.png" />
      <Container maxWidth="md">
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          className={classes.grid}
        >
          {cards.map((item) => <Card name={item.name} count={item.count} link={item.link} key={item.name} />)}
        </Grid>
      </Container>
    </Container>
  );
}


export default Dashboard;
