// import AppBar from "@mui/material/AppBar";
import { useState } from "react";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Stack,AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem, Typography } from "@mui/material";
 import {HEADER} from '../config-header-sidebar' 
 import { Navigate, useNavigate } from "react-router-dom";
const StyledAppBar = styled(AppBar)(({ theme }) => {
  return theme.unstable_sx({
    backgroundColor: "transparent",
    boxShadow: "none",
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderBottom: 0,
    borderStyle: "solid",
    position: "fixed",
    // top: HEADER.HEIGHT,
    left: "auto",
    backdropFilter: "blur(4px)",
    right: 10,
    // width: isMobile ? "100%" : `calc(100% - ${NAV.WIDTH}px)`,
    // width: "100%",
    color: "black",
    borderColor: "divider",
    height: HEADER.HEIGHT,
    display: "flex",
    justifyContent: "center",
    zIndex: 1000,
  });
});


export default function Header() {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate=useNavigate();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    // navigate('/');
  };
  const handlelogout=()=>{
    setAnchorEl(null);
    navigate('/');
  }
  return (
    <StyledAppBar  position="static" sx={{ height: "4.5rem" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" gap={1} alignItems="center">
          {/* <SidebarToggler /> */}
        </Stack>

        <Box>
          {/* here we have to add accountMenu for logout option  */}

         <Toolbar sx={{ justifyContent: '',}}>
        <Typography variant="h6" noWrap sx={{color:"red"}}>
          Welcome, Deepanshu
        </Typography>

        <IconButton edge="end" onClick={handleMenu}>
          <Avatar>D</Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handlelogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
        </Box>
      </Toolbar>
    </StyledAppBar>
  )
}


// import React from 'react';
// import { AppBar, Toolbar, IconButton, Avatar, Menu, MenuItem, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { HEADER } from '../config-header-sidebar';
// import { useState } from 'react';

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: 'none',
//   height: HEADER.HEIGHT,
//   justifyContent: 'center',
//   zIndex: theme.zIndex.drawer + 1,
// }));

// export default function Header() {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

//   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <StyledAppBar position="fixed">
//       <Toolbar sx={{ justifyContent: '', bgcolor:"yellow"}}>
//         <Typography variant="h6" noWrap sx={{color:"red"}}>
//           Welcome, Deepanshumaker
//         </Typography>

//         <IconButton edge="end" onClick={handleMenu}>
//           <Avatar>D</Avatar>
//         </IconButton>
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         >
//           <MenuItem onClick={handleClose}>Profile</MenuItem>
//           <MenuItem onClick={handleClose}>Logout</MenuItem>
//         </Menu>
//       </Toolbar>
//     </StyledAppBar>
//   );
// }
