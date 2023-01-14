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
import { Link } from "react-router-dom";
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
  container: {
    justifyContent: "flex-end",
  },
}));

function Login() {
  //navigate to search history after login
  const navigate = useNavigate();
  const navigateToSearchHistory = () => {
    navigate("/searchhistory");
  };
  const classes = useStyles();

  return (
    <div className={classes.contactUs}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <div className={classes.formContainer}>
              <Typography variant="h5" gutterBottom align="center">
                LOG IN
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

                <Button
                  onClick={navigateToSearchHistory}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Login
                </Button>
              </form>
              <Container
                alignItems="center"
                justifyContent="center"
                paddingTop="25px"
              >
                <h7>Don't have an account? </h7>{" "}
                <Link to="/register">Register here</Link>
              </Container>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
