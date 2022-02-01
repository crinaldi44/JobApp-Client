import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {
    Tooltip,
    IconButton,
    Avatar,
    Menu,
    MenuItem,
    ListItemIcon,
    Divider

} from '@mui/material';
import {
    PersonAdd,
    Settings,
    Logout
} from '@mui/icons-material';
import InfoSnackbar from './InfoSnackbar';

/**
 * The ProfileAvatar is an Icon that displays the two initials that represent
 * a user's name. It allows the user to interact with user account settings such
 * as their login state, profile, account settings, and more.
 * @returns {JSX.Element} an element containing JSX data
 * @see https://mui.com/components/menus/
 */
const ProfileAvatar = () => {

    /**
     * A JSON object representing configuration for the avatar.
     */
    const avatarStyle = {
        width: 30,
        height: 28,
        backgroundColor: 'var(--secondary-color)',
        padding: '5px',
        fontSize: '14px',
        fontWeight: '600'
    }

    /**
     * TEMPORARY: Represents whether the alert should display as
     * open.
     */
    const [alertOpen, setalertOpen] = useState(false);

     /**
     * Handles the action taken when the snackbar closes.
     * @param {*} event 
     * @param {*} reason 
     */
      const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') return;

        setalertOpen(false);
    }

    /**
     * Represents the anchor element.
     */
    const [anchorEl, setAnchorEl] = useState(null);

    /**
     * Represents whether the anchor element is in
     * position (initialized).
     */
    const open = Boolean(anchorEl);

    /**
     * Handles a click event.
     * @param {*} event 
     */
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    /**
     * Opens the snackbar alert.
     */
    const openAlert = () => {
        setalertOpen(true);
    }

    /**
     * Closes the menu by setting the anchor element to
     * null.
     */
    const handleClose = () => {
        setAnchorEl(null);
      };

    return <>
    <Tooltip title="My account">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar sx={avatarStyle}>CR</Avatar>
                </IconButton>
            </Tooltip>
            <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={openAlert}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={openAlert}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <Link to='/settings'>
                <MenuItem>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
                </MenuItem>
            </Link>
            <MenuItem onClick={openAlert}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          <InfoSnackbar
            open={alertOpen}
            info="This feature is currently unavailable!"
            closeHandler={handleCloseAlert}/>
          </>;
    };

/**
 * The ProfileAvatar is an Icon that displays the two digits of a user's name
 * @returns {JSX.Element}
 */
export default ProfileAvatar;
