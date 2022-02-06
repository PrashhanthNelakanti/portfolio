
const Footer = () => {
    return (<>
        <div id="footer" className="text-center bg-gradient-to-r from-purple-500 to-blue-500">
            <div className="container p-6">
                <div className="">
                    <p className="flex justify-center items-center border-white text-white">
                        <span className="mr-4">Register for free</span>
                        <button type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                            Sign up!
                        </button>
                    </p>
                </div>
            </div>

            <div className="text-center border-white text-white p-4" style={{'background-color': 'rgba(0, 0, 0, 0.2)'}}>
                © 2022 Copyright: Prashhanth
            </div>
        </div>
    </>);
}

export default Footer;