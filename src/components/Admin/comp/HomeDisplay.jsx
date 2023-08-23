import React from "react"
import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import {TableContainer} from "@mui/material"

const PostData = [
    {
        "first_name": "Avijeet",
        "email": "Avijeet@gmail.com"
    },
    {
        "first_name": "Gauri",
        "email": "Gauri@gmail.com"
    },
    {
        "first_name": "Priyanka",
        "email": "Priyanka@gmail.com"
    },
    {
        "first_name": "Dhruv",
        "email": "Dhruv@gmail.com"
    },
    {
        "first_name": "Omkar",
        "email": "Omkar@gmail.com"
    }
]

export default function HomeDisplay() {
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {PostData.map((list, index) => (
                        <TableRow key={index}>
                            <TableCell>{list.first_name}</TableCell>
                            <TableCell>{list.email}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}