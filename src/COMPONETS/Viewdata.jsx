import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewdata = () => {
    var[user,setuser]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response.data)
            setuser(response.data)
    },[])
   
    })
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell><h2>Name</h2></TableCell>
                    <TableCell><h2>Username</h2></TableCell>
                    <TableCell><h2>City</h2></TableCell>
                </TableHead>
                <TableBody>
                    {user.map((val,i)=>{
                        return(
                        <TableRow>
                             <TableCell>{val.name}</TableCell>
                    <TableCell>{val.username}</TableCell>
                    <TableCell>{val.address.city}</TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Viewdata