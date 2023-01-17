import {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import backgroundImage from "../Assets/back1.jpg";
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

function Register(onLogin) {
  const classes = useStyles();

  //navigate to search history after login
  // const navigate = useNavigate();
  // const navigateToLogin = () => {
  //   navigate("/login");
  // };
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleClick(e) {
    e.preventDefault();
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        navigate('/login')
      } else {
          alert("Invalid Username or Password!")
          
          navigate('/register')
    }})
  }

  return (
    <div className={classes.contactUs}>
      <Container style={{ marginTop: -100 , width: "95%"}}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <div className={classes.formContainer}>
              <Typography variant="h5" gutterBottom align="center">
                REGISTER ACCOUNT
              </Typography>
              <form>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Name"
                  variant="outlined"
                  value={username} onChange={e => setUserName(e.target.value)}

                />
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  variant="outlined"
                  value={email} onChange={e => setEmail(e.target.value)}
                />
                 <TextField
                  fullWidth
                  margin="normal"
                  label="Password"
                  type = "password"
                  variant="outlined"
                  value={password} onChange={e => setPassword(e.target.value)}
                />
                   <TextField
                  fullWidth
                  margin="normal"
                  label="Confirm Password"
                  type = "password"
                  variant="outlined"
                  value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}
                />

                <Button 
                   onClick={handleClick} variant="contained" color="primary" fullWidth>
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

export default Register;
