import React from 'react';

const Home = () => {
    return (
        <div>
            <div> I'm the Home Component </div>
            <button onClick={() => {console.log('!my button')}}>My button</button>
        </div>
    );
};

export default Home;