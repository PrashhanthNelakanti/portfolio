import React,{ useState } from 'react';
import { useRouter } from 'next/router'

export default function Register() {
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');  
  const router = useRouter();

  const handlePost = async (e) => {
    e.preventDefault();

    // reset error and message
    setError('');
    setMessage('');

    // fields check
    if (!fname || !email || !password) return setError('All fields are required');

    // post structure
    let info = {
      fname,
      email,
      password
    };
    // save the post
    let response = await fetch('/api/personalnfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(info),
    });
    // get the data
    let data = await response.json();
    

    if (data.success) {
      // reset the fields
      setFname('');
      setPassword('');
      setEmail('');
      router.push({
      pathname: '/emailValidate',
       query: { emailId: `${email}` },
      });
      // set the message
      return setMessage(data.message);
    } else {
      // set the error
      console.log(message)
      return setError(data.message);
    }
  };
  
  return (<>
    <div className="sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>
    <div className="flex justify-center">
      <form onSubmit={handlePost} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
            <h3 className="block uppercase tracking-wide text-lg font-bold mb-2 text-green-500">{message}</h3>
            <h3 className="block uppercase tracking-wide text-lg font-bold mb-2 text-red-500">{error}</h3>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input name="fname" onChange={(e) => setFname(e.target.value)} value={fname} autoComplete="given-name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email Address
            </label>
           {
             error=='User Already exists'
           ?(<><input name="email" onChange={(e) => setEmail(e.target.value)} value={email} autoComplete="given-name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
                  <p className="text-red-500 text-xs italic">Email is already in use</p></>)
           : (<input name="email" onChange={(e) => setEmail(e.target.value)} value={email} autoComplete="given-name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />)
           }
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Password
            </label>
            <input name="password" onChange={(e) => setPassword(e.target.value)} value={password} autoComplete="given-name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>
  </>);
}