import React from 'react';
import ServiceDetails from '../Service/ServiceDetails/ServiceDetails';
import {Link} from 'react-router-dom';

const Service = (props) => {

    const {img, title, description, name, rating, review, id} = props.service;
    
    return (
        <div>
            <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ml-0">
                    <img className="rounded-t-lg" src={img} alt="" />
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                    <Link to={`/serviceDetails/${id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-600 hover:bg-indigo-700 font-medium p-3 px-5 rounded-lg">
                        Read more
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;