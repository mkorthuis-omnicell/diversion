import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';

import { makeStyles } from '@material-ui/core/styles';

import { StoreProvider } from './store';
import reducers from './reducers';
import initialState from './store/initialState';

import TopNav from './components/common/topNav';
import Route from './components/route';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#1B4104',
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },

}));

function App() {
  const classes = useStyles();
  return (
    <StoreProvider initialState={initialState} reducer={reducers}>
      <Router>
        <div className={classes.grow}>
          <AppBar position="static" className={classes.appBar}>
            <TopNav />
          </AppBar>
          <Route />
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
