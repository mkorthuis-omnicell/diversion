import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import { login } from '../../actions';
import { useStore } from '../../store';


const useStyles = makeStyles((theme) => ({
  fieldSpace: {
    marginTop: '20px',
    marginBottom: '20px',
    textAlign: 'center',
    minWidth: '300px',
  },
  message: {
    minWidth: '300px',
    backgroundColor: 'rgb(205, 19, 10)',
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'center',
    color: '#FFFFFF',
  },
}));

const LoginInputLabel = withStyles({
  root: {
    textAlign: 'left',
  },
})(InputLabel);

const LoginTextField = withStyles({
  root: {
    width: '100%',
    paddingBottom: '2px',
  },
})(TextField);

const LoginButton = withStyles({
  root: {
    width: '100%',
    backgroundColor: '#1B4104',
    '&:hover': {
      backgroundColor: '#466533',
    },
  },
})(Button);

const PasswordButton = withStyles({
  root: {
    width: '100%',
    backgroundColor: '#BBBBBB',
    '&:hover': {
      backgroundColor: '#999999',
    },
  },
})(Button);

function Login() {
  const history = useHistory();
  const classes = useStyles();
  const [formVal, setState] = useState({ username: '', password: '' });
  const [{ message }, dispatch] = useStore();

  const updateField = (e) => {
    setState({ ...formVal, [e.target.name]: e.target.value });
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      onClick();
    }
  };

  const onClick = () => {
    if (formVal.username === 'omnicell' && formVal.password === 'omnicell') {
      dispatch(login(true));
      history.push('/feature');
    } else {
      dispatch(login(false, 'Invalid Credentials'));
    }
  };

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '80vh' }}
      >
        <Grid item md={3}>
          <form noValidate autoComplete="off">
            {message
            && (
            <Paper elevation={0} className={classes.message}>
              {message}
            </Paper>
            )}
            <div className={classes.fieldSpace}>
              <LoginInputLabel htmlFor="username">Username</LoginInputLabel>
              <LoginTextField id="username" name="username" value={formVal.username} onChange={updateField} onKeyDown={keyPress} />
            </div>
            <div className={classes.fieldSpace}>
              <LoginInputLabel htmlFor="username">Password</LoginInputLabel>
              <LoginTextField id="password" name="password" value={formVal.password} onChange={updateField} onKeyDown={keyPress} type="password" />
            </div>
            <div className={classes.fieldSpace}>
              <LoginButton variant="contained" color="primary" onClick={onClick}>
  Login
              </LoginButton>
            </div>
            <div className={classes.fieldSpace}>
              <PasswordButton variant="contained" color="primary">
  Reset Password
              </PasswordButton>
            </div>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}


export default Login;
