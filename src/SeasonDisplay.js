import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach',
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
    const { text, iconName } = seasonConfig[
        getSeason(props.lat, new Date().getMonth())
    ];

    return (
        <div>
            <i className={`massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`massive ${iconName} icon`}></i>
        </div>
    );
};

export default seasonDisplay;
