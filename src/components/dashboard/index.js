import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TitleBar from '../common/titleBar';
import Card from './diversionCard';

const cards = [
  { name: 'Whole Dose Waste', count: '1', link: '/waste' },
  { name: 'Overrides', count: '3' },
  { name: 'Unresolved Discrepancies', count: '2', link: 'discrepancy' },
  { name: 'High and Extreme Users', count: '2', link: '/category' },
  { name: 'Unreconciled Doses', count: '5' },
  { name: 'CSM Exceptions', count: '0' },
];

function Dashboard() {
  return (
    <Container maxWidth="xl">
      <TitleBar name="Diversion Dashboard" icon="/image/diversion-logo.png" />
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
      >
        {cards.map((item) => <Card name={item.name} count={item.count} link={item.link} key={item.name} />)}
      </Grid>
    </Container>
  );
}


export default Dashboard;
