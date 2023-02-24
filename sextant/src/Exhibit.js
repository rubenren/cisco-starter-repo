import React, { Component } from 'react';
import './Exhibit.css';

function Exhibit(props) {
    return (
        <div className='Exhibit'>
            <h2 className='ExhibitHeading'>{props.name}</h2>
            <div className='ExhibitContent'>
                {props.children}
            </div>
        </div>
    );
}

export default Exhibit;