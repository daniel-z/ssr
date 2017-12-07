import React from 'react';

const Home = () => {
    return (
        <div>
            <div> I'm the Home Component </div>
            <button onClick={() => {console.log('!my button 1')}}>My button</button>
        </div>
    );
};

export default Home;