import React from 'react';
import {Link} from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Navbar = () => {
  const {user, logOut} = useFirebase();

  return (
    <div>
      <nav className="bg-gray-50 border-gray-200 px-4 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between px-4 items-center mx-auto">
        <Link className="text-2xl font-bold text-indigo-600"  to="/home">MEDDICAL</Link>
          <div className="flex md:order-2">
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  {
                    user.email?
                    <div className="flex gap-2 items-center">
                      <p className="font-bold w-20 text-gray-600">{user.displayName}</p>
                      <Link to="" onClick={logOut} className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign Out </Link>
                    </div>

                    :<Link to="/login" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </Link>}
        </div>
      <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
  </div>
  <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium">
      <li>
        <Link to="/home" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 ">Home</Link>
      </li>
      <li>
        <Link to="/contact" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 ">Contact</Link>
      </li>
      <li>
        <Link to="/services" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 ">Services</Link>
      </li>
      <li>
        <Link to="/testimonials" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 ">Testimonials</Link>
      </li>
      <li>
        <Link to="/faq" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 ">FAQ</Link>
      </li>
      <li>
        <Link to="/about" className="block py-2 pr-4 pl-3 text-gray-500 border-b border-gray-100 hover:bg-gray-900 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 ">About Us</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;