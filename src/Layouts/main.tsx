// import React from 'react';
// import Box from '@mui/material/Box';
// import { 
//   // NAV, 
//   HEADER } from '../components/config-header-sidebar';

// type MainProps = {
//   children: React.ReactNode;
//   sx?: any;
// };

// export default function Main({ children, sx, ...other }: MainProps) {
//   return (
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         minHeight: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         px: 2,
//         py: `${HEADER.HEIGHT}px`,
//         backgroundColor:"#f5f5f5",
//         ...sx,
//       }}
//       {...other}
//     >
//       {children}
//     </Box>
//   );
// }

import React from 'react';
import Box from '@mui/material/Box';
import { HEADER } from '../components/config-header-sidebar';

type MainProps = {
  children: React.ReactNode;
  sx?: any;
};

export default function Main({ children, sx, ...other }: MainProps) {
  return (
    <Box
      component="main"
      sx={(theme) => ({
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        px: 2,
        py: `${HEADER.HEIGHT}px`,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        ...sx,
      })}
      {...other}
    >
      {children}
    </Box>
  );
}

