
import React, { useState } from 'react';
import Light from './Light';

const TrafficLights = ({ orientation = 'vertical' }) => {
    const [redCount, setRedCount] = useState(0);
    const [yellowCount, setYellowCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);
    const trafficLightsStyle = {
        display: 'flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        alignItems: 'center',
    };

    const handleRedClick = () => {
        setRedCount(prevCount => prevCount + 1);
    }

    const handleYellowClick = () => {
        setYellowCount(prevCount => prevCount + 1);
    }

    const handleGreenClick = () => {
        setGreenCount(prevCount => prevCount + 1);
    }

    return (
        <div style={trafficLightsStyle}>
            <Light tlColor="red" clickCount={redCount} handleClick={handleRedClick} />
            <Light tlColor="yellow" clickCount={yellowCount} handleClick={handleYellowClick} />
            <Light tlColor="green" clickCount={greenCount} handleClick={handleGreenClick} />
        </div>
    );
};

export default TrafficLights;