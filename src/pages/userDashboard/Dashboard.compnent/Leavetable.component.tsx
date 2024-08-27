// import React from 'react';
// import { Card, CardContent, Typography, Grid } from '@mui/material';

// interface LeaveType {
//     credited: number;
//     Remaining: number;
//     used: number;
//   }

//   interface UserLeaveData {
//     name: string;
//     year: number;
//     AnualLeave: LeaveType;
//     Study: LeaveType;
//     Health: LeaveType;
//     family: LeaveType;
//     paternity: LeaveType;
//     maternity: LeaveType;
//     unpaid: LeaveType;
//   }

//   interface CalendarCardProps {
//     data: UserLeaveData;
//   }
// const LeaveTable: React.FC<CalendarCardProps>=({data})=>{
//     return (
//         <Card sx={{ minWidth: 275, margin: 1, backgroundColor: '#f5f5f5' }}>
//         <CardContent>
//           <Typography variant="h6" component="div" sx={{ color: '#007fff', marginBottom: 2 }}>
//             {data.name} - {data.year}
//           </Typography>
//           <Grid container spacing={2}>
//             {Object.entries(data).map(([key, value]) => {
//               if (typeof value === 'object' && value !== null) {
//                 return (
//                   <Grid item xs={12} sm={6} md={4} key={key}>
//                     <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
//                       {key.toUpperCase()}
//                     </Typography>
//                     <Typography variant="body2">
//                       Credit: {value.credited}
//                     </Typography>
//                     <Typography variant="body2">
//                       Used: {value.used}
//                     </Typography>
//                     <Typography variant="body2">
//                       Remaining: {value.Remaining}
//                     </Typography>
//                   </Grid>
//                 );
//               }
//               return null;
//             })}
//           </Grid>
//         </CardContent>
//       </Card>
//       );
// }
// export default LeaveTable;

import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

interface LeaveType {
  credited: number;
  remaining: number;
  used: number;
}

interface User {
  year: number;
  types: {
    AnnualLeave: LeaveType;
    Study: LeaveType;
    Health: LeaveType;
    Family: LeaveType;
    Paternity: LeaveType;
    Maternity: LeaveType;
    Unpaid: LeaveType;
  };
}

interface CardComponentProps {
  data: User;
}

const LeaveTable: React.FC<CardComponentProps> = ({ data }) => {
  const { year, types } = data;

  return (
    <>
      {/* <Grid container spacing={2}> */}
      {Object.entries(types).map(([type, details]) => (
        <Card
          key={type}
          sx={{
            width: 250,
            backgroundColor: (theme) => theme.palette.background.default,
            boxShadow: "0px 4px 12px rgba(173, 216, 230, 0.4)",
            borderColor: "black",
            margin: "8px", // Add margin to create space between cards
          }}
        >
          <CardContent>
            <Box
              sx={{
                backgroundColor: "#1976d2",
                padding: "8px",
                textAlign: "center",
                borderRadius: "4px",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="body2" component="div">
                {year}
              </Typography>
              <Typography variant="body2" color="white">
                {type}
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" component="p">
                Credit: {details.credited}
              </Typography>
              <Typography variant="body1" component="p">
                Used: {details.used}
              </Typography>
              <Typography variant="body1" component="p">
                Remaining: {details.remaining}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
      {/* </Grid> */}
    </>
  );
};

export default LeaveTable;
