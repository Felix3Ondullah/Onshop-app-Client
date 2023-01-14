import {useState} from "react";
import { Button } from "react-bootstrap";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { Snackbar } from '@material-ui/core';

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
    marginLeft: theme.spacing(7),
    "&:hover": {
      color: "Black",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          OnShop-App
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/contactus" className={classes.link}>
              Contact Us
            </Link>
            <Link   onClick={handleClick}  className={classes.link}>
              Search History
              <Snackbar
        open={open}
        onClose={handleClose}
        message="Kindly Login to view this page...."
        autoHideDuration={2000}
      />
            </Link>
            {/* <Link to="/login" className={classes.link}>
              <Button>Login</Button>
            </Link> */}
            <Link to="/login" className={classes.link}>
              <Button>Log Out</Button>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
