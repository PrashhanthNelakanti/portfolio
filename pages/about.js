import React, { useEffect } from "react";
import Image from 'next/image'
import profile from '../public/imgs/profile.jpeg'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {MdEmail} from "react-icons/md";
import {FaGithub} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
const about = {
  contact: ' prashhanth.nel@gmail.com',
  github: ' https://github.com/PrashhanthNelakanti',
  linkedIn: ' https://www.linkedin.com/in/prashhanth',
  quotes: '"Embrace the Future: Where Dreams Merge with Lines of Code 🌐✨"',
  intro: "I am a Senior Cloud(AWS) Software Engineer with 6 years of experience in developing backend and front applications." +
      "With an extensive skillset encompassing Java, Go, Angular, and React, I stands at the forefront of the digital revolution, continuously pushing the envelope of what's possible." +
      " I am from Hyderabad IND ",
}
const About = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (<>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div className="md:flex">
      <div className="md:shrink-0">
        <Image alt="profile" quality={75} priority={false} src={profile} layout="fixed" width={150} height={150} className="h-25 w-25 rounded-full"/>
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Meet Prashhanth</div>
        <a className="block mt-1 text-lg leading-tight font-medium text-black">{about.quotes}</a>
        <p className="mt-2 text-slate-500">{about.intro}<span className="fi fi-in"></span></p>
      </div>
    </div>
      <div className="text-gray-500 font-thin grid grid-rows-2 md:grid-rows-3">
        <div style={{display: "flex", justifyContent: "center"}}>
          <MdEmail size={20}/><a>{about.contact}</a>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <FaGithub size={20}/><a className="underline underline-offset-4" href={about.github}>{about.github}</a>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <AiFillLinkedin color="#0077B5" size={25}/><a className="underline underline-offset-4" href={about.linkedIn}>{about.linkedIn}</a>
        </div>
      </div>
  </div>

    <div className="bg-white">
        <div className="max-w mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-1 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="pb-15 lg:pt-6 lg:pb-11 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-10">
            <div className="mt-10">
              <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-center">
                        <thead className="border-b bg-gray-800">
                        <tr>
                          <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            Degree
                          </th>
                          <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            University
                          </th>
                          <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                            Year
                          </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-white border-b">
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Master of Computers
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Osmania University
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            2017
                          </td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Bachelors in Electronics
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Osmania University
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            2013
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>);
}

export default About;
