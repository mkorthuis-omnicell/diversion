import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';

import { makeStyles } from '@material-ui/core/styles';

import TopNav from './components/common/topNav';
import SecondNav from './components/common/secondNav';
import Route from './components/route';


import './App.scss';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#1B4104',
  },
  grow: {
    flexGrow: 1,
  },

}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.grow}>
        <AppBar position="static" className={classes.appBar}>
          <TopNav />
          <SecondNav />
        </AppBar>
        <Route />
      </div>
    </Router>
  );
}

export default App;
