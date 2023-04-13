import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f2f2f2',
    };

    const menuStyle = {
        display: 'flex',
        gap: '20px',
    };

    return (
        <header style={headerStyle}>
            <h1>Меню</h1>
            <nav>
                <ul style={menuStyle}>
                    <li>
                        <Link to="/horizontal">Горизонтальний світлофор</Link>
                    </li>
                    <li>
                        <Link to="/vertical">Вертикальний світлофор</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
