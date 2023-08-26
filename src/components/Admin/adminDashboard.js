import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './adminDashboard.css';
import Header from './comp/Header';
import AdminSideMenuBar from './comp/AdminSideMenuBar'

import AdminTransactionsList from './comp/adminTransactionsList';

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AdminUsersList from './comp/adminUsersList';
import SideBar from './comp/Sidebar';

import Display from './comp/Display';

export default function AdminDashboard() {

    const [curr, setCurr] = useState("");

    return (
        <>
           
            <div className = "right">
                <Display curr = {curr}/>
            </div>
        </>
    );
    
}