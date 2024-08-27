import { Container, Typography, Box, Grid } from "@mui/material";
import Calendar from "../../components/ui/Calender";
import Card from "@mui/material/Card";
import BasicModal from "./Dashboard.compnent/Apply.modal";
import { AdminUser } from "../../AdminUser.data";
import LeaveTable from "./Dashboard.compnent/Leavetable.component";
export default function UserDashboard() {
  const highlightedDates = [
    { date: 8, description: "Festival 1" },
    { date: 15, description: "Independence day" },
    { date: 22, description: "Festival 3" },
    { date: 24, description: "Festival 4" },
    { date: 26, description: "Krishna Janmashtami" },
  ];
  return (
    <>
      <Box marginTop={"1rem"}>
        <Card
          sx={{
            marginTop: "10px",
            boxShadow: "0px 4px 12px rgba(173, 216, 230, 0.4)",
            borderColor: "black",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            sx={{
              // boxShadow: "0px 4px 12px rgba(173, 216, 230, 0.2)",
              // backgroundColor: (theme) => theme.palette.background.default,
              padding:"10px"
            }}
          >
            <Typography variant="h4" align="left">
              Welcome Deepanshu Kesarwani!
            </Typography>
            <BasicModal />
          </Box>
          <Container
            sx={{
              mt: 5,
            }}
          >
            <Typography
              variant="h6"
              align="left"
               bgcolor= '#1976d2'
              padding={"15px"}
              borderRadius={"10px"}
              gutterBottom
              sx={{
                color: "white",
              }}
            >
              August, 2024
            </Typography>
            <Calendar
              year={2024}
              month={1}
              highlightedDates={highlightedDates}
            />
          </Container>
        </Card>

        <Grid
          container
          spacing={2}
          sx={{
            padding: "20px",
            marginTop: "10px",
            // bgcolor:"yellow"
          }}
        >
          {AdminUser.map((data, index) => (
            // <Grid item xs={12} sm={6} md={4} key={index}>
            // </Grid>
            <LeaveTable data={data} />
          ))}
        </Grid>
        {/* <LeaveTable/> */}
      </Box>
    </>
  );
}
