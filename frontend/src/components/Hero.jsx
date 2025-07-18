
import React from "react";

export default function Hero() {
  return (
      <div>
        <section className="bg-white dark:bg-white-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-gray">
                Your gateway to secure and hassle-free doctor bookings.
              </h1>

              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-black-400">
                Find trusted doctors, view availability, and book appointments
                instantly—convenient, reliable healthcare at your fingertips,
                anytime you need it.
              </p>
              <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-gray dark:border-gray-700 dark:hover:bg-indigo-700 dark:focus:ring-gray-800"
              >
                Speak to Sales
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                  src="https://img.freepik.com/free-photo/medium-shot-scientists-posing-together_23-2148969982.jpg?uid=R202393192&ga=GA1.1.2144590951.1743410086&semt=ais_hybrid&w=740"
                  alt="mockup"
              />
            </div>
          </div>
        </section>
      </div>
  );
}