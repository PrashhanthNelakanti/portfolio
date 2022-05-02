import React, { useEffect } from "react";
import Image from 'next/image'
import profile from '../public/imgs/profile.jpeg'
import Aos from "aos";
import "aos/dist/aos.css";
import { FaBeer, FaLinkedin, FaLinkedinIn, FaMapPin } from 'react-icons/fa';
import { BeakerIcon, BellIcon, CodeIcon, LinkIcon, LocationMarkerIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
const user = {
  name: 'Prashhanth Nelakanti',
  email: 'prashhanth.nelakanti@gmail.com',
  profileUrl: 'https://in.linkedin.com/in/prashhanth?trk=public_profile_browsemap',

}

const about = {
  summary: ' Worked on Cloud platforms like AWS and PCF. Having 4.5 years of experience at in developing Spring framework and 2 years into Angular 7 applications. Extensive hands on experience in Spring-Data-Jpa, Spring-Rest and Spring-Boot. Hands on experience in Hibernate, SQL. Worked on various Front End Technologies like HTML with Angular Framework. For continues Integration we use bamboo. Projects involved include web servers like Apache Tomcat and application servers.',
  description:
    "GCM is a Enterprise Application Software which is uses the internal framework called VEC Framework which is built on the Spring Frame framework itself. The application interacts with various other application in the organization and play a vital role in gather the information of the user issues such as ticket creations, status of the ticket, ticket implementation etc.",
  highlights: [
    'Implemented performace tuning feature where the time complexity is reduced',
    'Developed web pages to users to display customer data based on business requirement both in UI and backend',
    'Integrated third party APIs like CISCO to analyze the reports and billing generated based on contract',
  ],
  details:
    'Worked on Cloud platforms like AWS and PCF. Having 4.5 years of experience in developing Spring framework and 2 years into Angular 7 applications.',
  reviews: [
    { average: 4, name: "Java-8" },
    { average: 4, name: "Spring Boot" },
    { average: 4, name: "Spring Data-Jpa" },
    { average: 3, name: "Microservices" },
    { average: 3, name: "Angular" },

  ],
  org: {
    name: 'Verizon'
  },
  duration: {
    tenure: 'Sep 2017 - Dec 2019'
  },
}

const About = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (<>
    <div className="grid grid-cols-2 gap-2">
      <Image data-aos="fade-left" alt="profile" src={profile} layout="fixed" width={200} height={200} className="h-25 w-25 rounded-full"/>
      <h1 data-aos="fade-up" className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-indigo-600 xl:inline">Prashhanth</span>
        <div className="text-2xl text-blue-500 sm:text-3xl md:text-3xl">
          <span>
            <FaMapPin className="h-5 w-5 text-blue-600" />HYDERABAD, INDIA
            <a href={user.profileUrl}><FaLinkedin className="h-5 w-5 text-blue-500" />LinkedIn Profile</a>
          </span>
        </div>
      </h1>
    </div>
    <div data-aos="zoom-in-down" className="space-y-4 py-15 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
      <div className="space-y-8">
        <p className="text-5xl font-bold dark:text-coolGray-50">Work Summary</p>
      </div>
      <div>
        <p className="text-xl text-gray-900">{about.summary}</p>
      </div>
      <div className="space-y-8">
        <p className="text-5xl font-bold dark:text-coolGray-50">Techical Stack</p>
      </div>
      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-white max-w-md text-center">
          <div className="p-8">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Back-End</h5>
            <div className="flex space-x-3 items-center justify-center">
              <span className=" px-3 py-2 bg-blue-500 text-white font-medium text-xs leading-tight">Java-8</span>
              <span className=" px-3 py-2 bg-blue-500 text-white font-medium text-xs leading-tight">Spring Data Jpa</span>
              <span className=" px-3 py-2 bg-blue-500 text-white font-medium text-xs leading-tight">MicroServices</span>
            </div>
            <div className="text-base mb-4"></div>
            <div className="flex space-x-3 items-center justify-center">
              <span className=" px-3 py-2 bg-blue-500 text-white font-medium text-xs leading-tight">AWS</span>
              <span className=" px-3 py-2 bg-blue-500 text-white font-medium text-xs leading-tight">Spring Boot</span>
              <span className=" px-3 py-2 bg-blue-500 text-white font-medium text-xs leading-tight">MongoDB</span>
            </div>
            <div className="text-base mb-4"></div>
            <div className="flex space-x-3 items-center justify-center">
              <span className=" px-3 py-2 bg-blue-500 text-white font-medium text-xs leading-tight">NodeJs</span>
              <span className=" px-3 py-2 bg-blue-500 text-white font-medium text-xs leading-tight">Python</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-base mb-4"></div>
      <div className="flex justify-center">
        <div className="block rounded-lg shadow-lg bg-white max-w-md text-center">
          <div className="p-8">
            <h5 className="text-gray-900 text-xl font-medium mb-2">Front-End</h5>
            <div className="flex space-x-3 items-center justify-center">
              <span className=" px-3 py-2 bg-red-500 text-white font-medium text-xs leading-tight">Angular</span>
              <span className=" px-3 py-2 bg-red-500 text-white font-medium text-xs leading-tight">NextJs</span>
              <span className=" px-3 py-2 bg-red-500 text-white font-medium text-xs leading-tight">ReactJs</span>
            </div>
            <div className="text-base mb-4"></div>
            <div className="flex space-x-3 items-center justify-center">
              <span className=" px-3 py-2 bg-red-500 text-white font-medium text-xs leading-tight">PrimeNg</span>
              <span className=" px-3 py-2 bg-red-500 text-white font-medium text-xs leading-tight">Bootstrap</span>
              <span className=" px-3 py-2 bg-red-500 text-white font-medium text-xs leading-tight">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-5xl font-bold dark:text-coolGray-50">Education</p>
      <div className="grid gap-3 row-gap-0 lg:grid-cols-4">
        <div className="relative text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <svg className="w-12 h-12 text-indigo-200 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">Schooling</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Completed in the year 2008
          </p>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-4 lg:absolute">
            <svg className="w-8 text-gray-700 transform rotate-90 lg:rotate-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
              <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 "></polyline>
            </svg>
          </div>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <svg className="w-12 h-12 text-indigo-400 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">12<sup>th</sup> Standard</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Completed in the year 2010
          </p>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-4 lg:absolute">
            <svg className="w-8 text-gray-700 transform rotate-90 lg:rotate-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
              <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 "></polyline>
            </svg>
          </div>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <svg className="w-12 h-12 text-indigo-600 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">Graduation</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Completed in the year 2013
          </p>
          <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-4 lg:absolute">
            <svg className="w-8 text-gray-700 transform rotate-90 lg:rotate-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line fill="none" strokeMiterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
              <polyline fill="none" strokeMiterlimit="10" points="15,5 22,12 15,19 "></polyline>
            </svg>
          </div>
        </div>
        <div className="relative text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
            <svg className="w-12 h-12 text-indigo-800 sm:w-16 sm:h-16" stroke="currentColor" viewBox="0 0 52 52">
              <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
            </svg>
          </div>
          <h6 className="mb-2 text-2xl font-extrabold">Masters</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Completed in the year 2017
          </p>
        </div>
      </div>
      </div>
  </>
  );
}

export default About;