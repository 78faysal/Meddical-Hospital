import React from 'react';
import img from '../../Images/dhakaMap.png';

const MapImg = () => {
    return (
        <div className="w-100">
            <img className="object-cover w-5/6 mx-auto my-10" src={img} alt="" />
        </div>
    );
};

export default MapImg;