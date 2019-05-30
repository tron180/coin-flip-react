import React, { Component } from 'react'
import './Coin.css'
import Layout from './Layout';

class Coin extends Component{
    constructor(props){
        super(props);
        this.state = {
            flips : 0,
            h : 0,
            t : 0,
            ht : "heads"
        };
        this.rand = this.rand.bind(this);
    }
    
    head = () => {
        this.setState({h : this.state.h + 1});
    }
    tails = () => {
        this.setState({t : this.state.t + 1});
    }
    rand(){
        this.setState({ht : Math.random() > 0.5 ? 'heads' : 'tails'});
        this.setState({flips : this.state.flips + 1})
        if(this.state.ht === "heads"){
            this.head();
        }else{
            this.tails();
        }
    };
    render(){
        return(
            <div className="Coin">
                <Layout ht={this.state.ht} />
                <button onClick={this.rand}>Flip Mee..!!</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.h} heads and {this.state.t} tails.</p>
            </div>
        );
    }
}

export default Coin;