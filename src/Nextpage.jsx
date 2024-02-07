import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default function Nextpage()
{
    return(
        <div style={{ 
            backgroundImage: `url('../public/images/bg2.png')`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column', // Added to stack child elements vertically
            alignItems: 'center',
            justifyContent: 'center',
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        }}>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '55%',
                padding: '20px',
                backgroundColor: 'rgba(249, 114, 114, 0.8)', // Adjust the alpha value for transparency
                borderRadius: '10px',
                textAlign: 'center',
            }}>
                <h1 className='fontLink'>Happy Happy</h1>
                <h1 className='fontLink'>Valentines Day!!</h1>
                <h3 className='fontLink'>~ from minnie ♡♡</h3>
            </div>
        </div>
    );
}