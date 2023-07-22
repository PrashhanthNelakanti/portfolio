import React,{useEffect, useState} from "react";
import Footer from "../components/Footer";
const Home = () => {

  return (
    <div>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-18">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Hi! I am Prashhanth</span>{' '}
            <span className="block text-indigo-600 xl:inline">Full Stack Dev.</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Just a normal Developer who dives in the brilliance of the code. Happiness is when your code listens to mind.
            I love to covert coffee ☕️ to code 👨🏽‍💻.
          </p>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            "We witness superior technology as we build technology with minds and hearts for the human race."
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="animate-bounce temporary-bounce has-tooltip rounded-md shadow">
              <a
                href="register"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
               >
                Get started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href={process.env.FREE_LANCER == 'Y' ? "/profile_pdf/profile_free.pdf" : "/profile_pdf/profile_complete.pdf"}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
               download >
                Get profile
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;