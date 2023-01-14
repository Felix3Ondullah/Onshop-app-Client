import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import backgroundImage from '../Assets/shopping2.jpg';


const useStyles = makeStyles((theme) => ({
  contactUs: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center'
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    width: '95vh',
    margin: 'auto'
  }
}));

function ContactUs() {
  const classes = useStyles();

  return (
    <div  className={classes.contactUs}>
      <Container  >
        <Grid  container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <div className={classes.formContainer}>
              <Typography variant="h5" gutterBottom align="center">
                Get in Touch
              </Typography>
              <form>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Button variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ContactUs;
