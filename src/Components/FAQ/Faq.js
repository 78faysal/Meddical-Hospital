import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div>
      <section class="text-gray-700">
        <div class="container px-5 py-10 mx-auto">
          <div class="text-center mb-10">
            <h1 class="text-4xl font-bold text-indigo-600 text-center mb-4">
              Frequently Asked Question
            </h1>
            <p class="text-base text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our hospital works and what
              can do for you.
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-100 rounded-md py-2 px-4">
                  Is MEDDICAL an gov. hospital?
                </summary>

                <span>
                  No MEDDICAL  is not a gov. hospital it's a private hospital. And it's known as high ranking hospital. 
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-100 rounded-md py-2 px-4">
                  How to get free services from here?
                </summary>

                <span>
                  This hospital provide free services for poor people those who haven't ability. For your any kind of problem please contact us to let us know what kind of problem you have and how can we help you.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-100 rounded-md py-2 px-4">
                  Is there any doctor available for heart problem?
                </summary>

                <span>
                  Yes. We have many doctors for heart problem and our most popular doctor is Dr. Pabel Khan
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-100 rounded-md py-2 px-4">
                  Emergency ambulance number?
                </summary>

                <span class="px-4 py-2">
                  Here is the number for your emergency ambulance - (237) 681-812-255.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-100 rounded-md py-2 px-4">
                  Online sit booking available?
                </summary>

                <span class="px-4 py-2">
                  To ensure that please contact with us in Email or call our help line number.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-100 rounded-md py-2 px-4">
                  How can I communicate with doctors?
                </summary>

                <span class="px-4 py-2">
                  To communicate doctor you have to book a sit and then you can tell him/her any of your problem and make communication with him/her.
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
        </div>
    );
};

export default FAQ;