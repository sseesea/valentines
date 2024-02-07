import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Link } from 'react-router-dom';

export default function Mainpage()
{
    return(
        <div style={{ 
            backgroundImage: `url('../images/bg.png')`, 
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
            <h1 className='fontLink'>To the best boyfriend</h1>
            <h1 className='fontLink'>in the world...</h1>
            <Link to='/secondpage' className="custom-btn">Tappy Tap</Link>
        </div>
    );
}