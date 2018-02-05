import React from 'react';
import ReactDOM from 'react-dom';

const Title = (props) => (
    <div className='text-center'>
        <h6>{props.children}</h6>
    </div>      
);

export default Title;