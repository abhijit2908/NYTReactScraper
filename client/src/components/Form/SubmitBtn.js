import React from 'react';

export const SubmitBtn = (props) => (

        <button{...props} className = 'btn btn-success btn-lg' type="submit">{props.children}</button>
    
)