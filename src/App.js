
import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home/';
import View from './pages/view/';
import Header from './components/header/';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <ToastContainer position="top-center" />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/view/:id" component={View} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;