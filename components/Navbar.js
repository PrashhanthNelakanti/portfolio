import {Disclosure} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {useRouter} from 'next/router'
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./actions";
import Link from "next/link";

const user = {
    name: 'Prashhanth Nelakanti',
    email: 'prashhanth.nelakanti@gmail.com',
    imageUrl:
        'https://media-exp1.licdn.com/dms/image/C5603AQEj4AWtH8N89A/profile-displayphoto-shrink_200_200/0/1605781245678?e=1649894400&v=beta&t=qn2RuS29GWM2GpG7ZrkBrP33HwgkUn-Fx0yKb19aOIY',
}
const navigation = [
    {name: 'Home', href: '/home', current: true},
    {name: 'About', href: '/about', current: false},
    {name: 'Info', href: '/info', current: false},
    {name: 'Projects', href: '/projects', current: false},
    {name: 'Register', href: '/register', current: false},
    {name: 'Login', href: '/login', current: false},
]
const userNavigation = [
    {name: 'Your Profile', href: '#'},
    {name: 'Settings', href: '#'},
    {name: 'Sign out', href: '#'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const counter = useSelector(state => state.counter);
    const loggedIn = useSelector(state => state.isLogged);

    console.log(loggedIn)
    const router = useRouter();
    return (
        <>

            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800">
                    {({open}) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center">

                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-8"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                                alt="Workflow"
                                            />
                                        </div>
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">
                                                {navigation.map((item) => (
                                                    item.name != 'Login' && loggedIn ? <Link href={item.href}>
                                                        <a key={item.name}
                                                           className={classNames(
                                                               'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                               'px-3 py-2 rounded-md text-sm font-medium'
                                                           )}
                                                           aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {item.name}</a>
                                                    </Link> : item.name == 'Login' && !loggedIn ?
                                                        <Link href={item.href}>
                                                            <a key={item.name}
                                                               className={classNames(
                                                                   'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                                   'px-3 py-2 rounded-md text-sm font-medium'
                                                               )}
                                                               aria-current={item.current ? 'page' : undefined}
                                                            >
                                                                {item.name}</a>
                                                        </Link> : ''
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        onClick={() => router.push('/notification')} >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                        <div class="absolute top-6 right-21 -mr-1 -mt-1 w-5 h-5 rounded-full bg-gray-50 animate-ping"></div>
                      </button>           
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div> */}
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button
                                            className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                            ) : (
                                                <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="md:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="pt-4 pb-3 border-t border-gray-700">
                                    <div className="flex items-center px-5">
                                        <div className="flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt=""/>
                                        </div>
                                        <div className="ml-3">
                                            <div
                                                className="text-base font-medium leading-none text-white">{user.name}</div>
                                            <div
                                                className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                        </div>
                                        <button
                                            type="button"
                                            className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-red-400 hover:text-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        >
                                        </button>
                                    </div>
                                    <div className="mt-3 px-2 space-y-1">
                                        {userNavigation.map((item) => (
                                            <Disclosure.Button
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}
