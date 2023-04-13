import React, { useState } from 'react';
import TrafficLights from './TrafficLights';

const StatsBar = () => {
    const [orientation, setOrientation] = useState('vertical');
    const [redCount, setRedCount] = useState(0);
    const [yellowCount, setYellowCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);

    const statsStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px',
    };

    const handleOrientationClick = () => {
        setOrientation(prevOrientation => prevOrientation === 'vertical' ? 'horizontal' : 'vertical');
    }

    return (
        <div style={statsStyle}>
            <button onClick={handleOrientationClick}>Change Orientation</button>
            <TrafficLights orientation={orientation} setRedCount={setRedCount} setYellowCount={setYellowCount} setGreenCount={setGreenCount} />
        </div>
    );
};

export default StatsBar;