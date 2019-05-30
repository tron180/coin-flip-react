import React, { Component } from 'react'

class Layout extends Component{
    render(){
        return(
            <div>
                <h1>Let's flip a coin !</h1>
                <img src={`https://tinyurl.com/react-coin-${this.props.ht}-jpg`} alt="Heads / Tails" />
            </div>
        );
    }
}

export default Layout;