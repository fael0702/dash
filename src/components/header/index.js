
import React,{ useEffect,useState } from 'react';
import { Link,useLocation } from 'react-router-dom';

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
            <p className="logo">NERD AUTODIDATA</p>
            <div className="header-right">
                <Link to="/">
                    <p
                        className={`${activeTab==="Home"? "active":""}`}
                        onClick={() => setActiveTab("Home")}
                    >
                        Home
                    </p>
                </Link>
                <Link to="/add">
                    <p
                        className={`${activeTab==="AddContact"? "active":""}`}
                        onClick={() => setActiveTab("Add Contact")}
                    >
                        Add Contact
                    </p>
                </Link>
                <Link to="/about">
                    <p
                        className={`${activeTab==="About"? "active":""}`}
                        onClick={() => setActiveTab("About")}
                    >
                        About
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Header;