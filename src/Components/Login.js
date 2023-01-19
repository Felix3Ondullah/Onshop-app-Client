import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import backgroundImage from "../Assets/back1.jpg";
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

function Login(onLogin)  {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  function handleClick(e) {
    e.preventDefault();
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          "user": {
          username,
          password
          }
      }
      ),
    })
    
    .then((r) => {
      console.log(username,password)
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        alert("Login was successful!")
        navigate('/searchhistory')
      } else {
          alert("Invalid Username or Password!")
          
          navigate('/login')
    }})
    
  }
  
  
  const classes = useStyles();

  return (
    <div className={classes.contactUs}>
      <Container style={{ marginTop: -200 , width:"100%"}}>
        <Grid container justify="center" alignItems="center" >
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <div className={classes.formContainer}>
              <Typography variant="h5" gutterBottom align="center">
                LOG IN
              </Typography>
              <form>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Password"
                  variant="outlined"
                  type = "password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  onClick={handleClick}
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
