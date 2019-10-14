import React, { Component } from 'react'
import axios from 'axios'
import './Quote.css'

class Quote extends Component {
    constructor(props) {
        super(props)
        this.state = {quote: "", isLoaded: false}
    }

    componentDidMount() {
        axios.get('https://api.github.com/zen').then(response => {
            setTimeout(
                function() {
                    this.setState({quote: response.data, isLoaded: true})
                }.bind(this),
            100)

            
        })
    }

    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
                        <h3>Always remember</h3>
                        <h1>{this.state.quote}</h1>
                    </div>
                ) : (
                    <div className="loader"/>
                )}
            </div>
        )
    }
}

export default Quote;