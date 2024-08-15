import React, { Component } from "react";

class Cincrement extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }
    componentDidMount(){
        console.log("this will show up the componenet first load") //mounting
    }
    componentDidUpdate=(prvPops , prevState) =>{
        if (prvPops.value!==this.state.value+1);
    }

    componentWillUnmount(){
        console.log("component of element remove") //unmounting
    }

    handleCincrement = () => {
        this.setState({ value: this.state.value + 1 });
    };

    handleCdecrement = () => {
        this.setState({ value: this.state.value - 1 });
    };

    zero = () => {
        this.setState({ value: 0 });
    };

    render() {
        return (
            <div>
                <h1>Class based: {this.state.value}</h1>
                <button onClick={this.handleCincrement}>CINCREMENT</button>
                <button onClick={this.handleCdecrement}>CDECREMENT</button>
                <button onClick={this.zero}>ZERO</button>
            </div>
        );
    }
}

export default Cincrement;
