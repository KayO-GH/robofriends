import React, { Component } from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    //componentDidCatch is a new lifecycle hook for catching errors
    componentDidCatch(error, info){
        this.setState({hasError: true});
        console.log('error', error);
        console.log('info', info);
    }

    render(){
        if(this.state.hasError)
            return <h1>Oops. That is not good</h1> ;
        return this.props.children;
    }
}

export default ErrorBoundary;