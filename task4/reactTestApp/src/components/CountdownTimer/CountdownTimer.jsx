import React, { useEffect, useState } from "react";

export const CountdownTimer = () => {
    const [value, setValue] = useState(10);

    useEffect(() => {
        const interval = setInterval(function() {
        setValue((prevValue) => prevValue - 1)
        }, 1000);
        if (value === 0) {
            clearInterval(interval);
        }

        return() => {
        clearInterval(interval);
        };
    }, [value]);

    return (
        <div>
            <h1 style={{fontSize: '99px', textAlign: 'center',}}>Задание 1</h1>

            <div style={{textAlign: 'center',
            width: '360px',
            height: 'auto',
            border: '3px solid #242424',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            margin: '50px auto' ,
            padding: '20px',
            fontFamily: 'Helvetica',
            backgroundColor: 'rgb(220, 220, 220)',
            color: 'black'
            }}>
                <h1>{value}</h1>
            </div>
        </div>
    )
}