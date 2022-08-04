/**
 * @file components/Dashboard/TailwindDashboard.js
 * @author Logan Bahr
 * @description Dashboard for the partner.
 * @since 7/15/22
 */

import {Fragment, useEffect, useState} from 'react'
import {Dialog, Menu, Transition} from '@headlessui/react'
import {LightningBoltIcon, MenuAlt1Icon, XIcon,} from '@heroicons/react/outline'
import {CheckCircleIcon, ChevronDownIcon, SearchIcon,} from '@heroicons/react/solid'
import WaivezLogoCropped from "../Graphics/WaivezLogoCropped";
import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import DemographicsPieChart from "./DemographicsPieChart";
import RegionalDistributionRadarChart from "./RegionalDistributionRadarChart";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function TailwindDashboard({data, avgAge, percentMinors, mostPopularState , ageDemographics, regionalDistribution}) {

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [dataIsLoading, setDataIsLoading] = useState(true);
    const [query, setQuery] = useState('');

    const {data: session, status} = useSession();

    // making sure the data is loaded before rendering the dashboard
    useEffect(() => {
        data && setDataIsLoading(false);
    }, [data]);

    const cards = [
        {title: 'Most Popular State', icon: LightningBoltIcon, data: mostPopularState},
        {title: 'Average Age', icon: LightningBoltIcon, data: avgAge},
        {title: 'Had Minors', icon: LightningBoltIcon, data: percentMinors + '%'},
    ];

    const filteredUsers =
        query === ''
            ? data
            : data.filter((user) => {
                return user.firstName.toLowerCase().includes(query.toLowerCase().trim()) ||
                    user.lastName.toLowerCase().includes(query.toLowerCase().trim())
            })

    return (
        <div>
            {/*need to wait until data is loaded, otherwise component render order is unbalanced -> error*/}
            {dataIsLoading ? <div>Loading...</div> : (
                <div className="min-h-full">
                    <Transition.Root show={sidebarOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                            </Transition.Child>

                            <div className="fixed inset-0 flex z-40">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="-translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="-translate-x-full"
                                >
                                    <Dialog.Panel
                                        className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-300"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                                <button
                                                    type="button"
                                                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                    onClick={() => setSidebarOpen(false)}
                                                >
                                                    <span className="sr-only">Close sidebar</span>
                                                    <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex-shrink-0 flex items-center content-center px-4">
                                            <WaivezLogoCropped color={'white'} height={50} width={150}
                                                               className="h-8 w-auto"/>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                                <div className="flex-shrink-0 w-14" aria-hidden="true">
                                    {/* Dummy element to force sidebar to shrink to fit close icon */}
                                </div>
                            </div>
                        </Dialog>
                    </Transition.Root>

                    {/* Static sidebar for desktop */}
                    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex flex-col flex-grow bg-primary pt-5 pb-4 overflow-y-auto">
                            <div className="flex items-center flex-shrink-0 px-4">
                                <Link href={'/'}>
                                    <a className={''}>
                                        <WaivezLogoCropped color={'#f9f9f9'} height={50} width={200}/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:pl-64 flex flex-col flex-1">
                        <div
                            className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
                            <button
                                type="button"
                                className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <MenuAlt1Icon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                            {/* Search bar */}
                            <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                                <div className="flex-1 flex">
                                    <form onSubmit={e => e.preventDefault()} className="w-full flex md:ml-0">
                                        <label htmlFor="search-field" className="sr-only">
                                            Search
                                        </label>
                                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                            <div
                                                className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                                                aria-hidden="true">
                                                <SearchIcon className="h-5 w-5" aria-hidden="true"/>
                                            </div>
                                            <input
                                                id="search-field"
                                                name="search-field"
                                                className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                                                placeholder="Search for a user"
                                                type="search"
                                                onChange={(e) => setQuery(e.target.value)}
                                            />
                                        </div>
                                    </form>
                                </div>


                                <div className="ml-4 flex items-center md:ml-6">
                                    {/*<button*/}
                                    {/*    type="button"*/}
                                    {/*    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"*/}
                                    {/*>*/}
                                    {/*    <span className="sr-only">View notifications</span>*/}
                                    {/*    <BellIcon className="h-6 w-6" aria-hidden="true"/>*/}
                                    {/*</button>*/}

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button
                                                className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                                            <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                                                <span className="sr-only">Open user menu for </span>
                                                {session?.user?.name}
                                            </span>
                                                <ChevronDownIcon
                                                    className="flex-shrink-0 ml-1 h-5 w-5 text-primary lg:block"
                                                    aria-hidden="true"
                                                />
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
                                            <Menu.Items
                                                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Your Profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Settings
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            onClick={async () => {
                                                                await signOut({callbackUrl: '/'});
                                                            }}
                                                        >
                                                            Logout
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>


                            </div>
                        </div>
                        <main className="flex-1 pb-8">
                            {/* Page header */}
                            <div className="bg-white shadow">
                                <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                                    <div
                                        className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                                        <div className="flex-1 min-w-0">
                                            {/* Profile */}
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="flex items-center">
                                                        <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                                                            {session?.user?.name}
                                                        </h1>
                                                    </div>
                                                    <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                                                        <dd className="-mt-4 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                                                            <CheckCircleIcon
                                                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-primary"
                                                                aria-hidden="true"
                                                            />
                                                            Verified account
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                            >
                                                Contact Support
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                            >
                                                Documentation
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">

                                {/*********************OVERVIEW STATS*********************/}
                                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                                    <h2 className="text-lg leading-6 font-medium text-gray-900">Overview</h2>
                                    <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                        {/* Card */}
                                        {cards.map((card) => (
                                            <div key={card.title}
                                                 className="bg-white overflow-hidden shadow rounded-lg">
                                                <div className="p-5">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <card.icon className="h-6 w-6 text-primary"
                                                                       aria-hidden="true"/>
                                                        </div>
                                                        <div className="ml-5 w-0 flex-1">
                                                            <dl>
                                                                <dt className="text-sm font-medium text-gray-500 truncate">{card.title}</dt>
                                                                <dd>
                                                                    <div
                                                                        className="text-lg font-medium text-gray-900">{card.data}</div>
                                                                </dd>
                                                            </dl>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/*****************************CHARTS/GRAPHS*****************************/}
                                <div className={'p-5 grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-[1500px] mx-auto'}>
                                    <DemographicsPieChart ageDemographics={ageDemographics}/>
                                    <RegionalDistributionRadarChart regionalDistribution={regionalDistribution}/>
                                </div>


                                {/*****************************TABLE*****************************/}
                                <div className="py-8 px-4 sm:px-6 lg:px-8">
                                    <div className="sm:flex sm:items-center">
                                        <div className="sm:flex-auto">
                                            <h1 className="text-xl font-semibold text-gray-900">Users</h1>
                                            <p className="mt-2 text-sm text-gray-700">
                                                A list of all the users in {session?.user?.name} that matches your
                                                search criteria.
                                            </p>
                                        </div>
                                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                            <button
                                                type="button"
                                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
                                            >
                                                Add user
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-8 flex flex-col">
                                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                <div
                                                    className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                                    <table className="min-w-full divide-y divide-gray-300">
                                                        <thead className="bg-gray-200">
                                                        <tr>
                                                            <th scope="col"
                                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                                First Name
                                                            </th>

                                                            <th scope="col"
                                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                                Last Name
                                                            </th>
                                                            <th scope="col"
                                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                                DOB
                                                            </th>
                                                            <th scope="col"
                                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                                State
                                                            </th>

                                                            <th scope="col"
                                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                City
                                                            </th>
                                                            <th scope="col"
                                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                Address
                                                            </th>
                                                            <th scope="col"
                                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                Email
                                                            </th>
                                                            <th scope="col"
                                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                                Minor(s)
                                                            </th>
                                                            <th scope="col"
                                                                className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                                <span className="sr-only">Edit</span>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody className="bg-white">
                                                        {filteredUsers?.map((person, personIdx) => (
                                                            <tr key={person._id}
                                                                className={personIdx % 2 === 0 ? 'bg-white hover:bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'}>
                                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                    {person.firstName}
                                                                </td>
                                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                    {person.lastName}
                                                                </td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.dateOfBirth.substring(0, 10)}</td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.state}</td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.city}</td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.address}</td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.minors.toString()}</td>
                                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                                    <a href="#"
                                                                       className="text-primary hover:text-primaryHover">
                                                                        Edit
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        </tbody>

                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </main>
                    </div>
                </div>
            )}

        </div>
    )
}
