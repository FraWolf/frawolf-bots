import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';

class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                    <Header />
                    <div id="content">
                        <Switch>
                            <Route exact path='/' component={Home} />
                        </Switch>
                    </div>
                    <Footer />
            </BrowserRouter>
        );
    }
}

export default Router;