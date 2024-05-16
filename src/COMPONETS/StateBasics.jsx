import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const StateBasics = () => {
   
    var [name,fname]=useState("batman")
    var[val,setval]=useState()
    var[sub,setsub]=useState()
    const handleInput=(e)=>{
      setval(e.target.value);
    }

    const submitHandler=()=>{
     console.log("clicked")
     setsub(val)
    }
  return (
    <div style={{margin:'180px'}}>
        <Typography variant='h1'>welcome to {sub}</Typography>
        <br/>
        <TextField variant="outlined" onChange={handleInput}/>
        <Button variant="contained" onClick={submitHandler}>submit</Button>

    </div>
  )
}

export default StateBasics