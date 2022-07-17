import React, {useState, useEffect} from 'react';
import Service from '../../Components/Service/service';
import {Link} from 'react-router-dom';

const ShortServics = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div>
            <div>
                <p className="text-cyan-400 font-bold text-center">Care you can believe in</p>
                <h3 className="text-3xl font-bold text-indigo-600 text-center mb-2">Our Services</h3>
            </div>
            <div className="container mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <>
                    {
                        services.slice(0, 3).map(service => <Service
                            key={service.id}
                            service = {service}
                        ></Service>)
                    }
                </>

            </div>
            <div className="grid justify-items-center mb-10 mt-3">
            <Link to="/services" className="grid justify-items-center text-white bg-indigo-600 hover:bg-indigo-700 font-medium p-3 px-5  rounded-lg">See All Services</Link>
            </div>
        </div>
    );
};

export default ShortServics;