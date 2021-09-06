import React from 'react';

const Checkbox = ({ style, type, text }) => {
    return (
        <div style={{margin:"20px 0"}}>
            <label>
                <input type={type} />
                <span> {text}</span>
            </label>
        </div>
    );
};

export default Checkbox;