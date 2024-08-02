// import React from 'react'
// import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import Toolbar from '@mui/material/Toolbar';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import CustomizedDialogs from './DialogBox';
import SearchIcon from '@mui/icons-material/Search';
const TableToolbar = () => {
  return (
    <div>
      <Toolbar>
      <FormControl fullWidth sx={{ m: 1 }}>
          {/* <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
            // label="Amount"
          />
        </FormControl>
       <CustomizedDialogs/>
      </Toolbar>
    </div>
  )
}

export default TableToolbar
