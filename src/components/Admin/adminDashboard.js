import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './adminDashboard.css';
import Header from './comp/Header';
import AdminSideMenuBar from './comp/AdminSideMenuBar'

import AdminTransactionsList from './comp/adminTransactionsList';

import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import AdminUsersList from './comp/adminUsersList';

export default function AdminDashboard() {

    const [theme, colorMode] = useMode();

    return (
        <AdminSideMenuBar/>
    );
    
}