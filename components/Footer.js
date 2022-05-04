import Marquee from "react-fast-marquee";
import {
    FaAws,
    FaDiscord,
    FaDocker,
    FaGithub,
    FaGoogle,
    FaNode,
    FaReact,
    FaStackOverflow,
    FaYoutube
} from "react-icons/fa";
import {SiMongodb, SiNextdotjs, SiVisualstudiocode} from "react-icons/si";
import {DiIntellij, DiNpm} from "react-icons/di";



export default function Footer() {
    let play=true;

    function someHandler(){
        console.log(play)
        play=false;
    }

    return(<>
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-10">
            <div className="sm:text-center lg:text-left">
                <h3 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
                    <span className="block text-gray-200 xl:inline">Build From</span>
                </h3>
            </div>
        </main>




        <Marquee direction='right'>
            <div className="flex">
                <div className="flex-initial w-64">
                    <FaYoutube className="col-span-2" color="red" fontSize="5.5em"/>
                </div>
                <div className="flex-initial w-64">
                    <FaReact color="#61DBFB" fontSize="5.5em"/>
                </div>
                <div className="flex-initial w-64">
                    <FaStackOverflow color="orange" fontSize="5.5em"/>
                </div>
                <div className="flex-initial w-64">
                    <FaNode color="green" fontSize="5.5em"/>
                </div>
                <div className="flex-initial w-64">
                    <FaGithub color="black" fontSize="5.5em"/>
                </div>
                <div className="flex-initial w-64">
                    <SiMongodb color="green" fontSize="5.5em"/>
                </div>
            </div>
        </Marquee>

        <Marquee direction='left'>
            <div className="flex">
                <div className="flex-initial w-64">
                    <FaGoogle color="grey" fontSize="5em"/>
                </div>
                <div className="flex-initial w-64">
                    <DiNpm color="red" fontSize="5.5em"/>
                </div>
                <div className="flex-initial w-64">
                    <SiVisualstudiocode color="#61DBFB" fontSize="5.5em"/>
                </div>
                <div className="flex-initial w-64">
                    <DiIntellij color="purple" fontSize="5.5em"/>
                </div>
                <div className="flex-initial w-64">
                    <FaDiscord color="#7289da" fontSize="5.5em"/>
                </div>
                <div className="flex-initial w-64">
                    <SiNextdotjs color="black" fontSize="5.5em"/>
                </div>
            </div>
        </Marquee>
    </>)

}