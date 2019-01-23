import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
            overflowY: 'scroll',//in proper css, it's overflow-y
            border: '1px solid black',
            height: '800px'
        }}>
            {props.children}
        </div>
    );
};

export default Scroll;