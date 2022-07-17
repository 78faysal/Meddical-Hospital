import React from 'react';
import './banner.css';

const banner = () => {
    return (
        <div>
            <div className="py-60 pageBanner "></div>
            <div className="bg-text">
                <h2 className="text-5xl font-bold text-indigo-500">Best Care For Your Good Health</h2>
                <p className="text-gray-400 my-3">We at Medicare are always fully focused on helping your to overcame any surgeon procedure, with great commitment and easy recovery. Professionally cultivate one-to-one customer service with robust ideas.</p>

                <button className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium p-3 px-5 rounded-lg">Contact Now</button>
                
            </div>
        </div>
    );
};

export default banner;