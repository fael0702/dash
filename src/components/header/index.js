
import React,{ useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header=() => {
    const location=useLocation();
    useEffect(() => {

    },[location]);
    return (
        <div className="header">
            <h1 className="logo">DASHBOARD</h1>
            <div className="header-right">
            </div>
        </div>
    );
};

export default Header;