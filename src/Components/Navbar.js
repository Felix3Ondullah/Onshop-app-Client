import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography, makeStyles} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "Dark Blue",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          On-shop App
        </Typography>
       
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About Us
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact Us
            </Link>
            {/* <Link to="/login" className={classes.link}>
              Login
            </Link> */}
          </div>
        
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;