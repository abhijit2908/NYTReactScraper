import React from 'react';

export const List = (props)=> (
<div className='list-overflow-container'>
    <ul className = 'list-group'>
        {props.children}
        </ul>
 </div>       

)