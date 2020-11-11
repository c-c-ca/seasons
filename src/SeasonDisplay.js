import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun',
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake',
    },
};

const getSeason = (lat, month) =>
    (3 <= month && month <= 8) == lat > 0 ? 'summer' : 'winter';

const seasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
};

export default seasonDisplay;
