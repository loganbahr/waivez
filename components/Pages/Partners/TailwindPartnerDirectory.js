/**
 * @file /components/Pages/Partners/TailwindPartnerDirectory.js
 * @author Logan Bahr
 * @description Lists all of the Partners in a searchable, sortable, grid format.
 * @since 7/15/22
 */
import {ChevronDownIcon, ChevronUpIcon, SearchIcon} from '@heroicons/react/solid'
import {useState} from "react";
import Link from "next/link";

export default function TailwindPartnerDirectory({partners}) {

    const [nameSort, setNameSort] = useState(true);
    const [citySort, setCitySort] = useState(true);
    const [stateSort, setStateSort] = useState(true);

    const nameSortHandler = () => {
        setNameSort(!nameSort);
    }
    const citySortHandler = () => {
        setCitySort(!citySort);
    }
    const stateSortHandler = () => {
        setStateSort(!stateSort);
    }

    // iterate through the partners object and create an array of objects
    const rows = Object.keys(partners).map((id) => {
        return {
            id: id,
            companyName: partners[id].title,
            city: partners[id].city,
            state: partners[id].state,
        }
    });

// bg-gradient-to-br from-primary to-[#9f40ff]
    return (
        <div className="sm:px-6 py-4 bg-gradient-to-br from-primary to-[#9f40ff] lg:py-8 rounded-lg">
            <div className="sm:flex sm:items-center">
                <div className="min-w-full">
                    {/*Search bar for Partners*/}
                    <div className={'mx-1 w-3/4 md:w-1/2'}>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            className="shadow-sm block min-w-full rounded-md focus:ring-0 focus:ring-primary"
                            placeholder="Search for a partner"
                        />
                    </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none"></div>
            </div>

            {/*table*/}
            <div className="mt-4 flex flex-col mx-1">
                <div className="-my-2 md:-my-4 overflow-x-auto">
                    <div className="min-w-full py-2">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-200">
                                <tr>
                                    <th scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        <div className="group inline-flex">
                                            Name
                                            <span
                                                className="cursor-pointer ml-2 flex flex-row rounded text-gray-400 group-hover:visible group-focus:visible hover:bg-gray-200">
                                                {nameSort ? <ChevronDownIcon onClick={() => {
                                                        nameSortHandler()
                                                    }} className="h-5 w-5" aria-hidden="true"/> :
                                                    <ChevronUpIcon onClick={() => {
                                                        nameSortHandler()
                                                    }} className="h-5 w-5" aria-hidden="true"/>}
                                            </span>
                                        </div>
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <div className="group inline-flex">
                                            City
                                            <span
                                                className="cursor-pointer ml-2 flex-none rounded text-gray-400 hover:bg-gray-300">
                                                {citySort ? <ChevronDownIcon onClick={() => {
                                                        citySortHandler()
                                                    }} className="h-5 w-5" aria-hidden="true"/> :
                                                    <ChevronUpIcon onClick={() => {
                                                        citySortHandler()
                                                    }} className="h-5 w-5" aria-hidden="true"/>}
                                            </span>
                                        </div>
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        <div className="group inline-flex">
                                            State
                                            <span
                                                className="cursor-pointer ml-2 flex-none rounded text-gray-400 hover:bg-gray-300">
                                                {stateSort ? <ChevronDownIcon onClick={() => {
                                                        stateSortHandler()
                                                    }} className="h-5 w-5" aria-hidden="true"/> :
                                                    <ChevronUpIcon onClick={() => {
                                                        stateSortHandler()
                                                    }} className="h-5 w-5" aria-hidden="true"/>}</span>
                                        </div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                {rows.map((partner) => (
                                    <tr key={partner.id} className={'hover:bg-gray-100 cursor-pointer'}>
                                        <Link passHref={true}
                                              href={`/partners/${partner.companyName.toLowerCase().replace(/\s/g, '')}`}>
                                            <td className="sm:whitespace-nowrap py-4 pl-4 pr-3 text-sm md:text-base font-medium text-gray-900 sm:pl-6">{partner.companyName}</td>
                                        </Link>
                                        <td className="sm:whitespace-nowrap px-3 py-4 text-sm md:text-base text-gray-500">{partner.city}</td>
                                        <td className="sm:whitespace-nowrap px-3 py-4 text-sm md:text-base text-gray-500">{partner.state}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
