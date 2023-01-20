import React,{ useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';
import backgroundImage from '../Assets/shopping2.jpg';
import emailjs from '@emailjs/browser';


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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bcxcqc6', 'template_jsar73s', form.current, 'LpXVUBPrCQJ-ZE3Sp')
      .then((result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert("Error: Email not sent. Please try again later.");
      });
  };


  return (
    <div  className={classes.contactUs}>
      <Container  >
        <Grid  container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <div className={classes.formContainer}>
              <Typography variant="h5" gutterBottom align="center">
                Get in Touch
              </Typography>
              <form ref={form} onSubmit={sendEmail}>
                <TextField
          
                  fullWidth
                  margin="normal"
                  label="Name"
                  variant="outlined"
                  type="text" 
                  name="user_name"
                />
                
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  variant="outlined"
                  type="email" 
                  name="user_email"
              
                  
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  name="message"
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
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
