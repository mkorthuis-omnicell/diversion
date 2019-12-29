import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from './featureCard';


const cards = [
  { name: 'Medication Expiration', image: '/image/med-expiration.png' },
  { name: 'Inventory Reduction', image: '/image/inv-reduction.png' },
  { name: 'Diversion Essentials', image: '/image/diversion.png', link: '/dashboard' },
];


function Feature() {
	 const classes = makeStyles((theme) => ({
  	container: {
  		maxWidth: '950px',
  	},
  	grid: {
  		marginTop: '30px',
  	},
  }))();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
        className={classes.grid}
      >
        {cards.map((item) => <Card name={item.name} image={item.image} link={item.link} key={item.name} />)}
      </Grid>
    </Container>
  );
}


export default Feature;
