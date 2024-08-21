import Box from "@mui/material/Box";
import React from "react";
import {NAV, HEADER} from "../components/config-header-sidebar"
import { useResponsive,isDesktopScreen } from "../hooks/use-responsive";
const SPACING = 16;

type MainProps = {
  children: React.ReactNode;
  sx?: any;
};

export default function Main({ children, sx, ...other }: MainProps){
    const lgUp = useResponsive("up", "lg");
    return (
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minHeight: 1,
            display: "flex",
    
            flexDirection: "column",
            px: 2,
            py: `${HEADER.HEIGHT + SPACING}px`,
            ...(lgUp ? {
              px: 4,
              py: `${HEADER.HEIGHT + SPACING}px`,
              width: `calc(100% - ${NAV.WIDTH}px)`,
            } : {
    
            }),
            ...sx,
          }}
          {...other}
        >
          {children}
        </Box>
      );
}