import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BeakerIcon, BellIcon, CodeIcon, LinkIcon, LocationMarkerIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
const user = {
  name: 'Prashhanth Nelakanti',
  email: 'prashhanth.nelakanti@gmail.com',
  imageUrl: 'https://media-exp1.licdn.com/dms/image/C5603AQEj4AWtH8N89A/profile-displayphoto-shrink_200_200/0/1605781245678?e=1649894400&v=beta&t=qn2RuS29GWM2GpG7ZrkBrP33HwgkUn-Fx0yKb19aOIY',
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

const About = ({data}) => {
  useEffect(()=>{
    Aos.init({duration:2000})
 },[])
  return (<>
    <div class="grid grid-cols-3 gap-3">
      <img data-aos="fade-left" className="h-30 w-30 rounded-full" src={user.imageUrl} alt="" />
      <h1 data-aos="fade-up" className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-indigo-600 xl:inline">Prashhanth</span>
        <div className="text-2xl text-blue-500">
          <span>
            <LocationMarkerIcon className="h-5 w-5 text-blue-700" />HYDERABAD, INDIA
            <LinkIcon className="h-5 w-5 text-blue-500" /><a href={user.profileUrl}>LinkedIn Profile</a>
          </span>
        </div>
      </h1>
    </div>
    <div data-aos="zoom-in-down" className="py-15 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
      <div className="space-y-8">
        <p className="underline text-4xl text-gray-900">Work Summary</p>
      </div>
      <div>
        <p className="text-xl text-gray-900">{about.summary}</p>
      </div>
      <div className="space-y-8">
        <p className="underline text-4xl text-gray-900">Techical Stack</p>
      </div>
      <div class="flex justify-center">
        <div class="block rounded-lg shadow-lg bg-white max-w-md text-center">
          <div class="p-8">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Back-End</h5>
            <div class="flex space-x-3 items-center justify-center">
              <span class=" px-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight">Java-8</span>
              <span class=" px-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight">Spring Data Jpa</span>
              <span class=" px-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight">MicroServices</span>
            </div> 
            <div class="text-base mb-4"></div>
            <div class="flex space-x-3 items-center justify-center">
              <span class=" px-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight">AWS</span>
              <span class=" px-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight">Spring Boot</span>
              <span class=" px-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight">MongoDB</span>
            </div>
            <div class="text-base mb-4"></div>
            <div class="flex space-x-3 items-center justify-center">
              <span class=" px-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight">NodeJs</span>
              <span class=" px-3 py-2 bg-blue-600 text-white font-medium text-xs leading-tight">Python</span>
            </div>          
          </div>
        </div>
      </div>
      <div class="text-base mb-4"></div>
      <div class="flex justify-center">
        <div class="block rounded-lg shadow-lg bg-white max-w-md text-center">
          <div class="p-8">
            <h5 class="text-gray-900 text-xl font-medium mb-2">Front-End</h5>
            <div class="flex space-x-3 items-center justify-center">
              <span class=" px-3 py-2 bg-red-600 text-white font-medium text-xs leading-tight">Angular</span>
              <span class=" px-3 py-2 bg-red-600 text-white font-medium text-xs leading-tight">NextJs</span>
              <span class=" px-3 py-2 bg-red-600 text-white font-medium text-xs leading-tight">ReactJs</span>
            </div> 
            <div class="text-base mb-4"></div>
            <div class="flex space-x-3 items-center justify-center">
              <span class=" px-3 py-2 bg-red-600 text-white font-medium text-xs leading-tight">PrimeNg</span>
              <span class=" px-3 py-2 bg-red-600 text-white font-medium text-xs leading-tight">Bootstrap</span>
              <span class=" px-3 py-2 bg-red-600 text-white font-medium text-xs leading-tight">Tailwind</span>
            </div>         
          </div>
        </div>
      </div>
      {/* 
      <div className="text-2xl grid grid-cols-2 gap-2 text-indigo-400">
        <div>Back-End</div>
      </div>
      <div className="text-2xl grid grid-cols-3 gap-2">
        <div></div>
        <div class="flex space-x-5 items-center justify-center">
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Java-8</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Spring Boot</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Spring Data Jpa</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Spring Rest</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">MicroServices</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">AWS</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Mongo</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">MySql</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">ActiveMq</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded">Python</span>
        </div>
      </div>
      <div className="text-2xl grid grid-cols-2 gap-2 text-red-400">
        <div></div>
        <div></div>
        <div>Front-End</div>
      </div>
      <div className="grid grid-cols-1">
        <div class="flex space-x-10 justify-center">
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-400 text-white rounded">Angular</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-400 text-white rounded">PrimeNg</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-400 text-white rounded">NextJs</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-400 text-white rounded">Bootstrap</span>
          <span class="text-xs inline-block py-3 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-400 text-white rounded">Tailwind</span>
        </div>
      </div> */}

    </div>

  </>
  );
}

export default About;