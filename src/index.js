import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude: lat } }) => this.setState({ lat }),
            ({ message: errorMessage }) => this.setState({ errorMessage })
        );
    }

    renderContent() {
        const { lat, errorMessage } = this.state;
        if (errorMessage) {
            return `Error: ${errorMessage}`;
        } else if (lat) {
            return <SeasonDisplay lat={lat} />;
        } else {
            return <Spinner message="Please accept location request" />;
        }
    }

    render() {
        return (
            <div style={{ border: 'solid red 10px' }}>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
