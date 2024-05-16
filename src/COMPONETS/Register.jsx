import { Button, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <br/><br/><br/>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br/><br/><br/>
        <TextField
         required
         id="outlined-required"
         label="Required"
         defaultValue="Username"
         /><br/><br/>
         <TextField
         id="outlined-password-input"
         label="password"
         type="password"
         autoComplete="current-password"
         /><br/><br/><br/>
         <Button varient="contained" color="success">
         submit
         </Button>
    </div>
  )
}

export default Register