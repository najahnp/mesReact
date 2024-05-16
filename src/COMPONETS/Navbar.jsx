import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import React from 'react'
import{Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant="h3">Home</Typography>
                <Typography variant="h3">Login</Typography>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/reg'  >ENTER</Link> </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/u'  >visit</Link> </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/c'  >counter</Link> </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/n'  >use</Link> </Button>&nbsp;&nbsp;&nbsp;
                <Button variant="contained"><Link to='/v'  >View</Link> </Button>&nbsp;&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar