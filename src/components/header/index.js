
import React,{ useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';

const Header=() => {
    const [activeTab,setActiveTab]=useState("Home");
    const location=useLocation();
    useEffect(() => {
        if(location.pathname==="/") {
            setActiveTab("Home");
        }
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