/**
 * @file /pages/contact/index.js
 * @author Logan Bahr
 * @description The contact page. (www.waivez.com/contact)
 * @since 3/1/2022
 */

import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {MailIcon, MenuIcon, PhoneIcon, XIcon} from '@heroicons/react/outline'


const ContactPage = () => {

    return (
        <div className="bg-secondary pb-24 relative z-0">
            <main className="overflow-hidden">
                {/* Header */}
                <div className="bg-secondary">
                    <div className="py-24 lg:py-32">
                        <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                                Get in touch
                            </h1>
                            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                                If you have any questions, concerns, or ideas for improvements — please let us know!
                                We&apos;re always looking for ways to improve our service.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact section */}
                <section className="relative bg-secondary" aria-labelledby="contact-heading">
                    <div className="absolute w-full h-1/2 bg-secondary" aria-hidden="true"/>
                    {/* Decorative dot pattern */}
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <svg
                            className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                            aria-hidden="true"
                        >
                            <defs>
                                <pattern
                                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-primary opacity-20"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"/>
                        </svg>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative bg-white shadow-2xl">
                            <div className="grid grid-cols-1 lg:grid-cols-3">
                                {/* Contact information */}
                                <div
                                    className="relative overflow-hidden py-10 px-6 bg-gradient-to-b from-primary to-primaryHover sm:px-10 xl:p-12">
                                    {/* Decorative angle backgrounds */}
                                    <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={343}
                                            height={388}
                                            viewBox="0 0 343 388"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                                                fill="url(#linear1)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear1"
                                                    x1="254.553"
                                                    y1="107.554"
                                                    x2="961.66"
                                                    y2="814.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff"/>
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                                        aria-hidden="true"
                                    >
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={359}
                                            height={339}
                                            viewBox="0 0 359 339"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                                                fill="url(#linear2)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear2"
                                                    x1="192.553"
                                                    y1="28.553"
                                                    x2="899.66"
                                                    y2="735.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff"/>
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div
                                        className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                                        aria-hidden="true">
                                        <svg
                                            className="absolute inset-0 w-full h-full"
                                            width={160}
                                            height={678}
                                            viewBox="0 0 160 678"
                                            fill="none"
                                            preserveAspectRatio="xMidYMid slice"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                                                fill="url(#linear3)"
                                                fillOpacity=".1"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="linear3"
                                                    x1="192.553"
                                                    y1="325.553"
                                                    x2="899.66"
                                                    y2="1032.66"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#fff"/>
                                                    <stop offset={1} stopColor="#fff" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-white">Contact information</h3>
                                    <p className="mt-6 text-base text-white max-w-3xl">
                                        Currently the best way to contact us is through email:
                                    </p>
                                    <dl className="mt-8 space-y-6">
                                        <dt>
                                            <span className="sr-only">Email</span>
                                        </dt>
                                        <dd className="flex text-base text-white">
                                            <MailIcon className="flex-shrink-0 w-6 h-6 text-white"
                                                      aria-hidden="true"/>
                                            <span className="ml-3">support@waivez.com</span>
                                        </dd>
                                    </dl>
                                </div>

                                {/* Contact form */}
                                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                    <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
                                    <form action="#" method="POST"
                                          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                        <div>
                                            <label htmlFor="first-name"
                                                   className="block text-sm font-medium text-gray-900">
                                                First name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="first-name"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="py-3 px-4 block w-full shadow-sm text-gray-600 focus:ring-primary focus:border-primary border-gray-600 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="last-name"
                                                   className="block text-sm font-medium text-gray-900">
                                                Last name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="last-name"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="py-3 px-4 block w-full shadow-sm text-gray-600 focus:ring-primary focus:border-primary border-gray-600 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="email"
                                                   className="block text-sm font-medium text-gray-900">
                                                Email
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    className="py-3 px-4 block w-full shadow-sm text-gray-600 focus:ring-primary focus:border-primary border-gray-600 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between">
                                                <label htmlFor="phone"
                                                       className="block text-sm font-medium text-gray-900">
                                                    Phone
                                                </label>
                                                <span id="phone-optional" className="text-sm text-gray-600">
                          Optional
                        </span>
                                            </div>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    autoComplete="tel"
                                                    className="py-3 px-4 block w-full shadow-sm text-gray-600 focus:ring-primary focus:border-primary border-gray-600 rounded-md"
                                                    aria-describedby="phone-optional"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label htmlFor="subject"
                                                   className="block text-sm font-medium text-gray-900">
                                                Subject
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    id="subject"
                                                    className="py-3 px-4 block w-full shadow-sm text-gray-600 focus:ring-primary focus:border-primary border-gray-600 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="flex justify-between">
                                                <label htmlFor="message"
                                                       className="block text-sm font-medium text-gray-900">
                                                    Message
                                                </label>
                                                <span id="message-max" className="text-sm text-gray-600">
                          Max. 500 characters
                        </span>
                                            </div>
                                            <div className="mt-1">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="py-3 px-4 block w-full shadow-sm text-gray-600 focus:ring-primary focus:border-primary border-gray-600 rounded-md"
                            aria-describedby="message-max"
                            defaultValue={''}
                        />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 sm:flex sm:justify-end">
                                            <button
                                                onSubmit={(event) => {
                                                    event.preventDefault()
                                                }}
                                                type="submit"
                                                className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:w-auto"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ContactPage;