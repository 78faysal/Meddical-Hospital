import React from 'react';
import img from '../../Images/signUp.jpg';
import googleImg from '../../Images/search.png';
import facebookImg from '../../Images/facebook.png';
import useFirebase from '../../Hooks/useFirebase';


const Login = () => {
    const {signInUsingGoogle, signInUsingFacebook} = useFirebase();
    
    return (
        <div>
            <section className="">
                <div className="px-6 py-6">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center g-6 text-gray-800">
                    <div className="">
                        <img
                        alt=""
                        src={img}
                        className="mx-auto"
                        />
                    </div>
                    <div className="lg:w-4/5 md:w-/5 mx-auto">
                        <div>
                            <h5 className="text-indigo-700 text-3xl font-bold text-center mb-10">Sign In</h5>
                        </div>
                        <form>
                        <div className="mb-6">
                            <input
                            type="text"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email address"
                            />
                        </div>

                        <div className="mb-6">
                            <input
                            type="password"
                            className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-block px-7 py-3 bg-indigo-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-indigo-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        >
                            Sign in
                        </button>

                        <div
                            className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                        >
                            <p className="text-center font-semibold mx-4 mb-0">OR</p>
                        </div>

                        <a
                            onClick={signInUsingFacebook} className="px-7 py-3 text-gray-900 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                        >
                            <img src={facebookImg} className="inline w-5 mx-5" alt="" />
                            Continue with Facebook
                        </a>
                        <a
                             onClick={signInUsingGoogle} className="px-7 py-3 text-gray-900 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                        >
                            <img src={googleImg} className="inline w-5 mx-5" alt="" />
                            Continue with Google
                        </a>
                        </form>
                    </div>
                    </div>
                </div>
            </section>
        </div>

        
    );
};

   

export default Login;