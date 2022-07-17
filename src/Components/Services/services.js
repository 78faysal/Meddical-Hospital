import React, {useState, useEffect} from 'react';
import Service from '../Service/service';
import useFirebase from '../../Hooks/useFirebase';
import Login from '../LogIn/Login';

const Services = () => {

    const {user} = useFirebase();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        user.email?
        <div>
            <div>
                <p className="text-cyan-400 font-bold text-center">Care you can believe in</p>
                <h3 className="text-3xl font-bold text-indigo-600 text-center mb-2">Our Services</h3>
            </div>
            <div className="container mx-auto px-4 my-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service = {service}
                        ></Service>)
                    }
                </>
            </div>
        </div>
        : <Login></Login>
    );
};

export default Services;