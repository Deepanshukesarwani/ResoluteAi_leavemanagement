import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton, Box } from '@mui/material';
import { Home, People, Settings, Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import { NAV, HEADER } from '../config-header-sidebar';

const Sidebar = styled(Drawer)(({ theme, open }) => ({
  width: open ? NAV.WIDTH : 60, // Adjusted width based on open state
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: open ? NAV.WIDTH : 60,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export default function SideBar() {
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState('EmployeeLeave');

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleNavigation = (page:any) => {
    setActivePage(page);
    // Add your navigation logic here, e.g., using react-router's useNavigate
  };

  return (
    <Sidebar variant="permanent" open={open} anchor="left">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: open ? 'flex-end' : 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
          padding: open ? '0 16px' : '0',
        }}
      >
        <IconButton onClick={handleToggle} sx={{ color: 'grey' }}>
          <Menu />
        </IconButton>
      </Toolbar>
      {open ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: HEADER.HEIGHT,
            backgroundColor: 'white',
          }}
        >
          <img src="/resoluteLogo.webp" alt="Resolute AI" style={{ width: '100%', maxWidth: '180px', padding: '10px' }} />
        </Box>
      ):(<Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: HEADER.HEIGHT,
          backgroundColor: 'white',
        }}>
          <img src="/ResoluteAI_logo.png" alt="resoluteLogo" style={{ width: '100%', maxWidth: '180px', padding: '10px' }} />
      </Box>)}
      <List>
        <ListItem
          button
          onClick={() => handleNavigation('EmployeeLeave')}
          sx={{
            backgroundColor: activePage === 'EmployeeLeave' ? 'rgba(245, 39, 24)' : 'inherit',
            '&:hover': {
              backgroundColor: 'rgba(242, 102, 92)',
            },
          }}
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          {open && <ListItemText primary="Employee's Leave" />}
        </ListItem>

        <ListItem
          button
          onClick={() => handleNavigation('LeaveManagement')}
          sx={{
            backgroundColor: activePage === 'LeaveManagement' ? 'rgba(245, 39, 24)' : 'inherit',
            '&:hover': {
              backgroundColor: 'rgba(242, 102, 92)',
            },
          }}
        >
          <ListItemIcon>
            <People />
          </ListItemIcon>
          {open && <ListItemText primary="Leave Management" />}
        </ListItem>

        <ListItem
          button
          onClick={() => handleNavigation('AdminManagement')}
          sx={{
            backgroundColor: activePage === 'AdminManagement' ? 'rgba(245, 39, 24)' : 'inherit',
            '&:hover': {
              backgroundColor: 'rgba(242, 102, 92)',
            },
          }}
        >
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          {open && <ListItemText primary="Admin Management" />}
        </ListItem>
      </List>
    </Sidebar>
  );
}
