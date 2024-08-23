// import Header from '../components/Header/index.header'
// import Sidebar from '../components/SideBar/index.sidebar'
// import { Outlet } from 'react-router-dom'
// import Main from './main'
// export default function MainLayout() {
//   return (
//     <div style={{ display: "flex", flexGrow: 1 }}>
//       <Header />
//       <Sidebar />
//       <Main>
//         <Outlet />
//       </Main>
//     </div>
//   )
// }

import React from "react";
import Header from "../components/Header/index.header";
import Sidebar from "../components/SideBar/index.sidebar";
import { Outlet } from "react-router-dom";
import Main from "./main";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}
let isDark = false;
export default function MainLayout() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <Header />
          <Sidebar  />
          <Main>
            <Outlet />
          </Main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
}
