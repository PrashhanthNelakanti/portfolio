import {FaReact} from "react-icons/fa";

export default function Spinner() {
    return (
        <>
            <div class="py-8 min-h-screen flex items-center justify-center">
                <div class="animate-spin">
                    <div class="h-20 w-20 bg-white rounded-full flex items-center justify-center">
                        <span class="text-8xl"><FaReact/></span>
                    </div>
                </div>
            </div>
        </>
    )
}