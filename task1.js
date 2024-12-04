import React, { Component } from "react";
class taskID extends Component{
    constructor(){
        super();
        this.state={
            value:0
        }
    }
    increment=()=>{
        this.setState({value:this.value+1});
    }
    decrement=()=>{
        this.setState({value:this.value-1});
    }
    reset=()=>{
        this.setState({ value: 0 });
    }
    render(){
        return(
            <div>
                <h1>hi</h1>
                <h1>Count:<strong>{this.state.value}</strong></h1>
                <button type="button" onClick={this.increment()}>++</button>
                <button type="button" onClick={this.decrement()}>--</button>
                <button type="button" onclick={this.reset()}>Reset</button>
            </div>
        );
    }
}
export default taskID;