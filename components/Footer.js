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

