import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function NavDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /*
    1. 2 variables holding each state of the sidebar
    2. Method checking whether user is currently logged in --> Check for JWT token?
    3. If false, print 'Login' sidebar
    4. If true, check if user is admin.
    5. If false, print standard "Logout" & "New Entry" options
    6. If true, print above as well as "Edit user details" option
  */
  const history = useHistory();

  const logout = async () => {
    const domain = `${process.env.REACT_APP_API_URL}/logout`;

    await axios.post(domain)
      .then(res => {
        history.push("/login");
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
    });
  };
  
  const isLoggedIn = () => {
    if (props.jwtToken) {
      return (
        <List>
          <ListItem
            button
            onClick={() => {
              logout();
            }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>

          <ListItem
            button
            onClick={() => {
              history.push("/new-entry");
            }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Create new record" />
          </ListItem>
        </List>
      );
    } else {
      return (
        <List>
          <ListItem
            button
            onClick={() => {
              history.push("/login");
            }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>

          <ListItem
            button
            onClick={() => {
              history.push("/register");
            }}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Register" />
          </ListItem>
        </List>
      );
    }
  };

  // const isAdmin = () => {
  //   // Logic to check if user is admin
  //   if (false) {
  //     return null;
  //   } else {
  //     return (
  //       <List>
  //         {["View Users"].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //     );
  //   }
  //};

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      {isLoggedIn()}
      <Divider />
      {/*isAdmin()*/}
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Chemical Auditor
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jwtToken: state.jwtToken
  }
}

export default connect(mapStateToProps)(NavDrawer);
