import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import backgroundImage from "../Assets/signin2.jpg";
import { useNavigate } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  contactUs: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  },
}));

function ContactUs() {
  const classes = useStyles();

  //navigate to search history after login
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className={classes.contactUs}>
      <Container>
        <Grid container="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <div className={classes.formContainer}>
              <Typography variant="h5" gutterBottom align="center">
                REGISTER ACCOUNT
              </Typography>
              <form>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Username"
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
                  label="Password"
                  variant="outlined"
                />
                   <TextField
                  fullWidth
                  margin="normal"
                  label="Confirm Password"
                  variant="outlined"
                />

                <Button 
                   onClick={navigateToLogin} variant="contained" color="primary" fullWidth>
                  SIGN UP
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
