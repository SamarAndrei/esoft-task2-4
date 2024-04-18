import React, { useEffect, useState } from "react";

export const WindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const resize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [windowSize]);

    return(
        <div>
            <h1 style={{fontSize: '99px', textAlign: 'center'}}>Задание 3</h1>

            <div style={{
                textAlign: 'center',
                width: '360px',
                height: 'auto',
                border: '3px solid #242424',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                margin: '50px auto',
                padding: '20px',
                fontFamily: 'Helvetica',
                backgroundColor: 'rgb(220, 220, 220)',
                color: 'black'
            }}>
                <p>Ширина: {windowSize.width}</p>
                <p>Высота: {windowSize.height}</p>            
            </div>
        </div>
    );
}