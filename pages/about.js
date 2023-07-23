import React, { useEffect } from "react";
import Image from 'next/image'
import profile from '../public/imgs/profile.jpeg'
import Aos from "aos";
import "aos/dist/aos.css";
const experience = {
  projectName: 'Projects',
  tech: 'Technologies',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Experience', href: '#' },
  ],
  duration: {
    tenure: 'Sep 2017 - Dec 2019'
  },
  description:
      "Worked on Cloud platforms like AWS and PCF. Having 4.5 years of experience in developing Spring framework and 2 years into Angular 7 applications. Extensive hands on experience in Spring-Data-Jpa, Spring-Rest and Spring-Boot. Hands on experience in Hibernate, SQL. Worked on various Front End Technologies like HTML with Angular Framework. For continues Integration we use bamboo. Projects involved include web servers like Apache Tomcat and application servers.",
  projects: [
    '',
    'Developed web pages to users to display customer data based on business requirement both in UI and backend',
    'Integrated third party APIs like CISCO to analyze the reports and billing generated based on contract',
  ],
  reviews: [
    { average: 5, name: "Java-8" },
    { average: 5, name: "Spring Boot" },
    { average: 5, name: "Spring Data-Jpa" },
    { average: 3, name: "Microservices" },
    { average: 3, name: "AWS" },
    { average: 3, name: "PCF" },
    { average: 3, name: "Jenkins" },
    { average: 3, name: "Terraform" },
    { average: 4, name: "Angular" },
    { average: 5, name: "PrimeNg" },
    { average: 5, name: "Bootsrap" },
    { average: 5, name: "Maven" },
    { average: 5, name: "Git" },
    { average: 3, name: "Bamboo" },
    { average: 5, name: "Intellij" },
    { average: 4, name: "Python" },

  ]
}
const About = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (<>
    <div className="grid grid-cols-1 gap-1">
      <Image data-aos="fade-left" alt="profile" quality={75} priority={false} src={profile} layout="fixed" width={200} height={200} className="h-25 w-25 rounded-full"/>
    </div>
        <div className="bg-white">
            <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                  <h3 className="text-lg font-medium text-gray-900">Technologies I Experienced</h3>
              <div className="mt-4 lg:mt-0 lg:row-span-3">
                {experience.reviews.map((review) => (
                    <div key={review.name} className="mt-1">
                      <div className="mt-1 flex space-x-1 ml-1  justify-between text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        {review.name}
                      </div>
                    </div>
                ))}
              </div>
              </div>
        </div>
  </>);
}

export default About;
