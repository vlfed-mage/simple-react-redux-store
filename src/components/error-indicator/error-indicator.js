import React from 'react';

import icon from '../../images/error.jpg'

const ErrorIndicator = () => {
    return (
        <div className='error-indicator' >
            <img src={ icon } alt="error"/>
            <span>something has gone terribly wrong</span>
            <span>( but we already sent librarian to fix it )</span>
        </div>
    );
};

export default ErrorIndicator;
