import React, { Component } from 'react';

class AddrComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            v4: props.v4,
            ip: null
        }
    }
    
    componentDidMount() {
        if(this.state.v4) {
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => this.setState({ ip: data.ip}));
        } else {
            fetch('https://api64.ipify.org?format=json')
                .then(response => response.json())
                .then(data => this.setState({ ip: data.ip}));
        }
    }

    render() {
        return (
            <span className='AddrComp'>
                {this.state.ip}
            </span>
        );
    }

}

export default AddrComp;