import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginToggleButton from "./LoginToggleButton";
import {Link} from "react-router-dom";
import "./topbar.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const TopBar = () => {
  return (
      <div>
        <CssBaseline>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                <Box
                    sx={{
                      position: "relative",
                      width: 100,
                      height: "100%",
                      display: "flex",
                      alignItems: "center"
                    }}
                >
                  <Link className="top-bar-link" to="/">
                    <CardMedia
                        component="img"
                        sx={{
                          position: "relative",
                          top: 0,
                          p: 0,
                          right: 0,
                          bottom: 0,
                          left: 0,
                          objectFit: "cover",
                          borderRadius: 1
                        }}
                        image="/images/rave-logo.jpg"
                        alt="logo"
                    />
                  </Link>
                  <Link to="/search">
                    <IconButton sx={{pl: 1}}>
                      <SearchIcon/>
                    </IconButton>
                  </Link>
                </Box>
              </Typography>
              <LoginToggleButton/>
            </Toolbar>
          </AppBar>
        </CssBaseline>
      </div>
  );
};

export default TopBar;