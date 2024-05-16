import { Button, Typography} from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setcount]=useState(0)
    const add=()=>{
        setcount(count+1)
    }
    const sub=()=>{
        setcount(count-1)
    }

  return (
    <div>
       <br /><br />
       <Typography variant='h3'>count:{count}</Typography>
       <br /><br />
       <Button variant="contained" color="success" onClick={add}>+</Button>
       &nbsp;&nbsp;
       <Button variant="contained" color="error" onClick={sub}>-</Button>
    </div>
  )
}

export default Counter