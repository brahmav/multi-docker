import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Im Some other Page
            <Link to="/">Go back hom</Link>
        </div>
    );
};