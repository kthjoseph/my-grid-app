import React, { Component } from 'react';

export function ImageFormatter(props) {

    const value = props.value;
    const text = <img border="0" width="150" height="100" src={ value }></img>

    return (
        <span>{text}</span>
    );
}