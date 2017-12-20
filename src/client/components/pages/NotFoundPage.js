import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFoundPage = true;
    return (
        <div>
            <h3>Ooops, route not found!</h3>
        </div>
    );
};

export default {
    component: NotFoundPage
};