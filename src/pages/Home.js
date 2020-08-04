import React, { Component } from 'react';
import axios from 'axios';
import { API_BASE } from '../config.json';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bots: []
        }

        axios.get(API_BASE)
        .then(res => {
            this.setState({ bots: res.data });
        })
    }

    componentDidMount() {
        this.getData();
        this.intervalID = setInterval(this.getData.bind(this), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    
    getData = () => {
        axios.get(API_BASE)
        .then(res => {
            this.setState({ bots: res.data });
        })
    }

    render() {
        return (
            <div>
                {this.state.bots.length == 0 && (
                    <div class="loading">
                        <h1>LOADING...</h1>
                        <img src="https://i.pinimg.com/originals/51/77/40/5177402f9a223466db995ed7c25a6311.gif"></img>
                    </div>
                )}

                {this.state.bots && this.state.bots.length !== 0 && (
                    <div>
                        { this.state.bots.map(bot => {
                            return(
                            <div className="bot-container" key={bot.id}>
                        
                                <div className={`bot-container-status-${bot.status}`}></div>
                                
                                <div className="name-container">
                                    <div className={`status-${bot.status}`}></div> <h1 className="botname">{ bot.tag }</h1>
                                </div>
                                
                                <div className="users-container">
                                    <h1 className="entry">{ (bot.users).toLocaleString() }</h1>
                                </div>
                                
                                <div className="servers-container">
                                    <h1 className="entry">{ (bot.guilds).toLocaleString() }</h1>
                                </div>
                                
                                <div className="shard-container">
                                    <h1 className="entry">{ bot.shards }</h1>
                                </div>
                                
                                <img className="expander active" src="https://cdn.discordapp.com/attachments/289745750865346560/739475537369759824/Expander.png" />
                            
                            </div>
                            )
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default Home;