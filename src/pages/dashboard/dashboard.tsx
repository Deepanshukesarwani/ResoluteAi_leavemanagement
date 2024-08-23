// import React from 'react'
import { Typography } from "@mui/material"
import StickyHeadTable from "../../coreUi/table"
import TableToolbar from "../../coreUi/TableToolbar"
function Dashboard() {
  return (
    <>
     <Typography align="center" variant="h4">Employee leave dashboard</Typography>
      <TableToolbar/>
      <StickyHeadTable/>
    </>
  )
}

export default Dashboard
