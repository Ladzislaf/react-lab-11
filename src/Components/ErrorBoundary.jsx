import React from 'react';

export default class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
    }

    componentDidCatch(error, info) {
        console.log(error, 'error')
        console.log(info, 'info')
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError)
            return (
                <h3 style={{marginLeft: '50px'}}>
                    Oops... Error :(
                </h3>
            )
        else
            return this.props.children
    }
}
