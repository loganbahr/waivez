import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import {ArrowNarrowLeftIcon, ArrowNarrowRightIcon} from "@heroicons/react/solid";

const DashboardTable = ({query, data}) => {

    const TABLE_LENGTH = 15;

    const {data: session, status} = useSession();

    const [numPages, setNumPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (filteredUsers?.length > TABLE_LENGTH) {
            setNumPages(Math.trunc(data?.length / TABLE_LENGTH + 1));
        }
        if (filteredUsers?.length < TABLE_LENGTH) {
            setNumPages(1);
        }
    }, [data?.length, filteredUsers?.length]);


    const filteredUsers =
        query === ''
            ? data
            : data.filter((user) => {
                return user.firstName.toLowerCase().includes(query.toLowerCase().trim()) ||
                    user.lastName.toLowerCase().includes(query.toLowerCase().trim())
            })

    // reduce filteredUsers to only show 10 users per page
    const users = filteredUsers.slice((currentPage - 1) * TABLE_LENGTH, currentPage * TABLE_LENGTH);

    const nextPage = () => {
        if (currentPage < numPages) {
            setCurrentPage(currentPage + 1);
        }
    }
    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    return (
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
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
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
                                {users?.map((person, personIdx,) => (
                                    <tr key={person._id}
                                        className={personIdx % 2 === 0 ? 'bg-white hover:bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {person.firstName}
                                        </td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {person.lastName}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.dateOfBirth}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.address.state}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.address.city}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.address.line}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                        <td className="relative cursor-pointer whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            View
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                            {/*PAGINATION*/}
                            <nav className="bg-gray-200 p-4 flex items-center justify-between">
                                <div className="w-0 flex-1 flex">
                                    <div
                                        className={filteredUsers.length < TABLE_LENGTH ? 'hidden' : 'group cursor-pointer pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700'}
                                        onClick={() => previousPage()}
                                    >
                                        <ArrowNarrowLeftIcon
                                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-700"
                                            aria-hidden="true"/>
                                        Previous
                                    </div>
                                </div>

                                {
                                    numPages > 6 ? (
                                        <div className="md:-mt-px md:flex">
                                            {Array.from({length: 3}, (_, i) => (
                                                <div
                                                    key={i}
                                                    className={i + 1 === currentPage ? 'border-transparent cursor-pointer text-primary hover:text-primaryHover hover:border-primary border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium' : 'border-transparent cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'}
                                                    //className="border-transparent cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                                                    onClick={() => setCurrentPage(i + 1)}
                                                >
                                                    {i + 1}
                                                </div>)
                                            )}

                                            {currentPage > 3 && currentPage < numPages - 2 ?
                                                (<span className={'text-lg pt-4 px-4'}>
                                                    {currentPage}
                                                </span>) :
                                                (<span
                                                    className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">...</span>)}


                                            {Array.from({length: 3}, (_, i) => (
                                                <div
                                                    key={i}
                                                    className={numPages - 2 + i === currentPage ? 'border-transparent cursor-pointer text-primary hover:text-primaryHover hover:border-primary border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium' : 'border-transparent cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'}
                                                    onClick={() => setCurrentPage(numPages - 2 + i)}
                                                >
                                                    {numPages - 2 + i}
                                                </div>)
                                            )}
                                        </div>
                                    ) : (
                                        <div className="md:-mt-px md:flex">
                                            {Array.from({length: numPages}, (_, i) => (
                                                <div
                                                    key={i}
                                                    className={i + 1 === currentPage ? 'border-transparent cursor-pointer text-primary hover:text-primaryHover hover:border-primary border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium' : 'border-transparent cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'}
                                                    onClick={() => setCurrentPage(i + 1)}
                                                >
                                                    {i + 1}
                                                </div>)
                                            )}
                                        </div>
                                    )
                                }

                                <div className="-mt-px w-0 flex-1 flex justify-end">
                                    <div
                                        className={filteredUsers.length < TABLE_LENGTH ? 'hidden' : 'group cursor-pointer pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700'}
                                        onClick={() => nextPage()}
                                    >
                                        Next
                                        <ArrowNarrowRightIcon
                                            className="ml-3 h-5 w-5 text-gray-400 group-hover:text-gray-700"
                                            aria-hidden="true"/>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardTable;
