import
//  React,
 { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Box,
} from "@mui/material";
import { Home, People, Settings, Menu } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { NAV, HEADER } from "../config-header-sidebar";
import MyApp from "../DarkMode/DarkMode.com";
const Sidebar = styled(Drawer)(({ theme, open }) => ({
  width: open ? NAV.WIDTH : 60, // Adjusted width based on open state
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: open ? NAV.WIDTH : 60,
    boxSizing: "border-box",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export default function SideBar() {
  const [open, setOpen] = useState(true);
  // const [activePage, setActivePage] = useState('EmployeeLeave');

  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleNavigation = (page: any) => {
    // setActivePage(page);
    console.log(params);
    console.log(location);
    // Add your navigation logic here, e.g., using react-router's useNavigate
  };

  return (
    <Sidebar variant="permanent" open={open} anchor="left">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: open ? "flex-end" : "center",
          alignItems: "center",
          // backgroundColor: 'red',
          padding: open ? "0 16px" : "0",
        }}
      >
        <IconButton onClick={handleToggle} sx={{
           color: (theme) => theme.palette.text.primary,
            }}>
          <Menu />
        </IconButton>
      </Toolbar>
      {open ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: HEADER.HEIGHT,
            // backgroundColor: "white",
          }}
        >
          <img
            src="/resoluteLogo.webp"
            alt="Resolute AI"
            style={{ width: "100%", maxWidth: "180px", padding: "10px" }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: HEADER.HEIGHT,
            backgroundColor: "white",
          }}
        >
          <img
            src="/ResoluteAI_logo.png"
            alt="resoluteLogo"
            style={{ width: "100%", maxWidth: "180px", padding: "10px" }}
          />
        </Box>
      )}
      <List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            minHeight: "70vh",
          }}
        >
          <Box
          >
            <ListItem
              button
              onClick={() => navigate("userDashboard")}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              {open && <ListItemText primary="User Dashboard" />}
            </ListItem>

            <ListItem
              button
              onClick={() => navigate("dashboard")}
            >
              <ListItemIcon>
                <People />
              </ListItemIcon>
              {open && <ListItemText primary="Leave Management" />}
            </ListItem>

            <ListItem
              button
              onClick={() => handleNavigation("AdminManagement")}
            >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              {open && <ListItemText primary="Admin Management" />}
            </ListItem>
          </Box>

          <Box>
            <MyApp/>
          </Box>
        </Box>
      </List>
    </Sidebar>
  );
}
