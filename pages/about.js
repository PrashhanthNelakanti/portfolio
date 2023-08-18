import React, {useEffect} from "react";
import Image from 'next/image'
import profile from '../public/imgs/profile.jpeg'
import Aos from "aos";
import "aos/dist/aos.css";

const experience = {
    projectName: 'Projects',
    tech: 'Technologies',
    href: '#',
    breadcrumbs: [
        {id: 1, name: 'Experience', href: '#'},
    ],
    org: {
        name: 'Verizon'
    },
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
    skills: [
        { name: "Java-8"},
        { name: "Spring Boot"},
        { name: "Spring Data-Jpa"},
        { name: "Microservices"},
        { name: "AWS"},
        { name: "PCF"},
        { name: "Jenkins"},
        { name: "Terraform"},
        { name: "Angular"},
        { name: "PrimeNg"},
        { name: "Bootsrap"},
        { name: "Maven"},
        { name: "Git"},
        { name: "Bamboo"},
        { name: "Intellij"},
        { name: "Python"},

    ]
}
const About = ({data}) => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return (<>

        <div className="bg-white">
                <div className="relative h-32 w-32">
                    <div className="absolute left-3 top-0 h-16 w-16">
                        <Image data-aos="fade-left" alt="profile" src={profile} layout="fixed" width={200} height={200}
                        className="h-25 w-25 rounded-full"/>
                    </div>
                        <div className="absolute inset-x-0 top-0 h-16">
                            <h3 className="text-lg font-medium text-gray-900">Technologies I Experienced</h3>
                        </div>
                    <div className="mt-4 lg:mt-0 lg:row-span-3">
                        {experience.skills.map((skill) => (
                            <div className="mt-1">
                                <div
                                    className="mt-1 flex space-x-1 ml-1  justify-between text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {skill.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    </>);
}

export default About;
