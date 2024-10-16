import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

const Navigation = ({ name, onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <AppBar
          className='ba b--black-40 shadow-8'
          style={{ background: "transparent" }}
          position='static'
        >
          <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={() => onRouteChange("signout")}
              className='f3 link dim black underline pa3 pointer'
            >
              Sign Out
            </Button>
            <Avatar className='shadow-3 ba b--near-black ma2 grow'>
              {name[0]}
            </Avatar>
          </Toolbar>
        </AppBar>
      </nav>
    );
  } else {
    return (
      <nav>
        <AppBar
          className='ba b--black-40 shadow-8'
          style={{ background: "transparent" }}
          position='static'
        >
          <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={() => onRouteChange("signin")}
              className='f3 link dim black underline pa3 pointer'
            >
              Sign In
            </Button>
            <Button
              onClick={() => onRouteChange("register")}
              className='f3 link dim black underline pa3 pointer'
            >
              Register
            </Button>
          </Toolbar>
        </AppBar>
      </nav>
    );
  }
};

export default Navigation;
