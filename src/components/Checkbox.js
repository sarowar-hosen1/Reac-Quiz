import React from 'react';

const Checkbox = ({ children,   className , ...rest}) => {
    return (
        <label className={className} {...rest}>
            <input type="checkbox" />
            <span> {children}</span>
        </label>
    );
};

export default Checkbox;