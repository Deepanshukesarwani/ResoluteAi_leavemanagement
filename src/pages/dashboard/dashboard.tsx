// import React from 'react'
import { Typography } from "@mui/material"
import StickyHeadTable from "../../coreUi/table"
import TableToolbar from "../../coreUi/TableToolbar"
function Dashboard() {
  return (
    <div>
     <Typography align="center" variant="h4">Employee leave dashboard</Typography>
      <TableToolbar/>
      <StickyHeadTable/>
    </div>
  )
}

export default Dashboard
