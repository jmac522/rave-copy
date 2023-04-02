import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {signOut} from "../../reducers/user-data-reducer";

const ProfileDropdown = ({name, image, logout, moderator}) => {
  const [anchorEl, setAnchorEl] = useState();
  const dispatch = useDispatch();

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleLogout = () => {
    handleClose();
    logout({logoutParams: {returnTo: window.location.origin}});
    dispatch(signOut());
  };

  const moderatorPanel = () => {
    console.log("MODERATOR");
    return (
        <MenuItem onClick={handleClose}>
          <Link component={RouterLink} to="/moderator">Moderator Panel</Link>
        </MenuItem>);
  };

  return (
      <>
        <IconButton onClick={handleClick}>
          <Avatar alt={name} src={image}
                  sx={{width: 40, height: 40}}/>
        </IconButton>
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            id="profile-menu">
          <MenuItem onClick={handleClose}>
            <Link component={RouterLink} to="/profile">Profile</Link>
          </MenuItem>
          {moderator && moderatorPanel()}
          <MenuItem onClick={handleLogout}>
            Log Out
          </MenuItem>
        </Menu>
      </>
  );
};

export default ProfileDropdown;