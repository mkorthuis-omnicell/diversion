import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import TitleBar from '../common/titleBar';
import Card from './diversionCard';

const cards = [
  { name: 'Whole Dose Waste', count: '1' },
  { name: 'Overrides', count: '3' },
  { name: 'Unresolved Discrepancies', count: '2' },
  { name: 'High and Extreme Users', count: '2' },
  { name: 'Unreconciled Doses', count: '5' },
  { name: 'CSM Exceptions', count: '0' },
];

function Dashboard() {
  return (
    <Container maxWidth="lg">
      <TitleBar name="Diversion Dashboard" icon="/image/diversion-logo.png" />
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
      >
        {cards.map((item) => <Card name={item.name} count={item.count} key={item.name} />)}
      </Grid>
    </Container>
  );
}


export default Dashboard;
