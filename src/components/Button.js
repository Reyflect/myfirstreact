import React from "react";

class Button extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    addCount =()=>{
        this.setState(
            {
                count : this.state.count+1
            }
        )
        
    }
    resetCount = ()=>{
        this.setState({
            count: 0
        })
    }
    render(){
        return (
        <div>
            <button onClick={this.addCount}>Click Me!</button>
            <br/>
            <button onClick={this.resetCount}>Reset!</button>
            <p>counting = {this.state.count}</p>
        </div>
            
            )
    }
}

export default Button

