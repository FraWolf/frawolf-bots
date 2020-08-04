import React, { Component } from 'react';

class Header extends Component {
    render() {
       return(
        <div id="header">
            <h1 id="sitename"> FraWolf / Bots </h1>
            <img id="fralogo" src="https://cdn.glitch.com/6091f8e7-113e-4677-b7d8-5a69a20b1ff7%2FFW_Logo.png?v=1596366951844"></img>
        </div>
        );
    }
}

export default Header;