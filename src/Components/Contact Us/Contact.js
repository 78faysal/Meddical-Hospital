import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 my-10 pb-5">
            <div className="">
                <p className="text-cyan-400 font-bold text-center">Get In Touch</p>
                <h3 className="text-3xl font-bold text-indigo-600 text-center mb-5">Contact</h3>

                <div className="grid gap-x-8 gap-y-10 md:grid-cols-4 sm:grid-cols-1">
                    <div className="bg-blue-300 hover:bg-indigo-600 p-10 text-indigo-600 hover:text-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                        <h3 className="font-bold">Emergency Call</h3>
                        <p>+093434253467</p>
                        <p>(237) 681-812-255</p>
                    </div>

                    <div className="bg-indigo-600 hover:bg-blue-300 p-10 text-blue-500 hover:text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <h3 className=" font-bold">Location</h3>
                        <p>0123 Some place</p>
                        <p>9876 Some country</p>
                    </div>

                    <div className="bg-blue-300 hover:bg-indigo-600 p-10 text-indigo-600 hover:text-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h3 className="font-bold">Email</h3>
                        <p>fildineeesoe@gmil.com</p>
                        <p>myebstudios@gmail.com</p>
                    </div>

                    <div className="bg-blue-300 hover:bg-indigo-600 p-10 text-indigo-600 hover:text-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="font-bold">Working Hour</h3>
                        <p>Mon-Sat 09:00-20:00</p>
                        <p>Sunday Emergency only</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;