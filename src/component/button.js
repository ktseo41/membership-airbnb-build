import React from 'react';

const Button = ((text, className) => {
    const classNames = `btn ${className}`;
    return (
        <button type='button' className={classNames}>{text}</button>
    );
})

export default Button;