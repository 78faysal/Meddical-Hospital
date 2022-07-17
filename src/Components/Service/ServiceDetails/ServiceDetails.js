import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import Login from '../../LogIn/Login';

const ServiceDetails = () => {

    const {user} = useFirebase();
    const {serviceId} = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {
        fetch(`/data.json`)
            .then(res => res.json())
            .then(data => {
                const service = data.find(service => service.id === parseInt(serviceId))
                if(service?.id){
                    setServiceDetails(service)
                }
            })
    }, [serviceId])

    return (
        <div className="container mx-auto p-4 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center">
            <div>
                <img src={serviceDetails.img} alt="" />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-indigo-600 mb-4">{serviceDetails?.title}</h3>
                <p className="mb-2 text-xl ">{serviceDetails?.name}</p>
                <p className="mb-2">Description: {serviceDetails?.description}</p>
                <div className="flex gap-10 mb-4">
                    <p className="align-baseline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {serviceDetails.rating}
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                    {serviceDetails.review}</p>
                </div>
                <button className="text-white bg-indigo-600 hover:bg-indigo-700 font-medium p-3 px-5 rounded-lg">Call Now</button>
            </div>
        </div>
    );
};

export default ServiceDetails;