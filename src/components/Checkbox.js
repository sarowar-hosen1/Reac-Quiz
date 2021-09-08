import React from 'react';

const Checkbox = ({ text,   className , ...rest}) => {
    return (
        <label className={className} {...rest}>
            <input type="checkbox" />
            <span> {text}</span>
        </label>
    );
};

export default Checkbox;