import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude: lat } }) => this.setState({ lat }),
            ({ message: errorMessage }) => this.setState({ errorMessage })
        );
    }

    render() {
        const { lat, errorMessage } = this.state;

        if (errorMessage) {
            return `Error: ${errorMessage}`;
        } else if (lat) {
            return <SeasonDisplay lat={lat} />;
        } else {
            return 'Loading!';
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
