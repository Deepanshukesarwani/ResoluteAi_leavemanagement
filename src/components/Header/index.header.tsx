import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";
 import {HEADER} from '../config-header-sidebar' 
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
  return (
    <StyledAppBar  position="static" sx={{ height: "4.5rem" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" gap={1} alignItems="center">
          {/* <SidebarToggler /> */}
        </Stack>

        <Box>
          {/* here we have to add accountMenu for logout option  */}
        </Box>
      </Toolbar>
    </StyledAppBar>
  )
}
