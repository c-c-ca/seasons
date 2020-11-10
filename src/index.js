import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude: lat } }) => this.setState({ lat }),
            ({ message: errorMessage }) => this.setState({ errorMessage })
        );
    }

    render() {
        const { lat, errorMessage } = this.state;

        let text;
        if (errorMessage) {
            text = `Error: ${errorMessage}`;
        } else if (lat) {
            text = `Latitude: ${lat}`;
        } else {
            text = 'Loading!';
        }

        return <div>{text}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
