import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
    ChartBarIcon,
    CursorClickIcon,
    DocumentReportIcon,
    MenuIcon,
    RefreshIcon,
    ShieldCheckIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import {ChevronDownIcon} from '@heroicons/react/solid'
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";
import Logo from "../../Graphics/Logo";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TailwindHeader() {

    const {data: session, status} = useSession();

    return (
        <div className={'max-w-7xl mx-auto'}>
            <Popover className="relative bg-secondary">
                <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
                    <div>
                        <Link href="/" passHref={true}>
                            <a className="flex">
                                <Logo color={'#7f00ff'} height={55} width={55}/>
                            </a>
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button
                            className="bg-secondary rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                    </div>

                    <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                        <Popover.Group as="nav" className="flex space-x-10">
                            <Link href={'/partners'} passHref={true}>
                                <a className="text-base font-medium text-gray-500 hover:text-primary">
                                    Partners
                                </a>
                            </Link>

                            <Link href={'/pricing'} passHref={true}>
                                <a className="text-base font-medium text-gray-500 hover:text-primary">
                                    Pricing
                                </a>
                            </Link>

                            <Link href={'/about'} passHref={true}>
                                <a className="text-base font-medium text-gray-500 hover:text-primary">
                                    About
                                </a>
                            </Link>

                            <Link href={'/contact'} passHref={true}>
                                <a className="text-base font-medium text-gray-500 hover:text-primary">
                                    Contact
                                </a>
                            </Link>
                        </Popover.Group>

                        <div
                            className="ml-2 flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:space-x-2 sm:align-middle">
                            {!session ? <Link href={'/auth/signin'} passHref={true}>
                                <button
                                    className="inline-block bg-primary py-2 px-4 border border-transparent rounded-md text-base font-medium text-secondary hover:bg-primaryHover focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                                    Sign in
                                </button>
                            </Link> : <button
                                className="inline-block bg-secondary border border-gray-300 py-2 px-4 border border-transparent rounded-md text-base font-medium text-primary hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                                onClick={async () => {
                                    await signOut({callbackUrl: '/auth/signin'});
                                }}>
                                Sign Out
                            </button>}

                            {session &&
                                <Link passHref={true}
                                      href={`/partner/${session.user.name.toLowerCase().replace(/\s/g, '')}/dashboard`}>
                                    <button
                                        className={'inline-block bg-primary py-2 px-4 border border-transparent rounded-md text-base font-medium text-secondary hover:bg-primaryHover focus:ring-2 focus:ring-offset-2 focus:ring-primary'}>
                                        Dashboard
                                    </button>
                                </Link>}
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel focus
                                   className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div
                            className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button
                                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true"/>
                                        </Popover.Button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 px-5">
                                <div className="grid grid-cols-2 gap-4">

                                    <Link href={'/partners'} passHref={true}>
                                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Partners
                                        </a>
                                    </Link>

                                    <Link href={'/pricing'} passHref={true}>
                                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Pricing
                                        </a>
                                    </Link>


                                    <Link href={'/about'} passHref={true}>
                                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            About
                                        </a>
                                    </Link>

                                    <Link href={'/contact'} passHref={true}>
                                        <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                                            Contact
                                        </a>
                                    </Link>
                                </div>

                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Sign up
                                    </a>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?{' '}
                                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                            Sign in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}

