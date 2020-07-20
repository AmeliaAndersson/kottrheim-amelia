import React from 'react'
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
    return(
        <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Amelias Plants
                        </Typography>
                    </Toolbar>
                </AppBar>
        </div>
    )
}
export default NavBar;
  