/**
 * @file components\Pages\Home\TailwindPartnerSearchBar.js
 * @author Logan Bahr
 * @description Dropdown menu for selecting partner, which reroutes to the selected partner's page.
 * @since 7/21/22
 */

import React, {useState} from 'react'
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid'
import {Combobox} from '@headlessui/react'
import {useRouter} from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TailwindPartnerSearchBar({companies}) {

    const router = useRouter();

    const [query, setQuery] = useState('');
    const [selectedPerson, setSelectedPerson] = useState();
    const [partnerURL, setPartnerURL] = useState('');

    // crawl through json and get the names of the companies
    const companyNames = Object.keys(companies).map(key => companies[key].title);

    // map a key to each company name
    const companyNamesWithIds = companyNames.map((companyName, index) => {
        return {
            id: index + 1,
            name: companyName
        }
    });

    const filteredPeople =
        query === ''
            ? companyNamesWithIds
            : companyNamesWithIds.filter((partner) => {
                return partner.name.toLowerCase().includes(query.toLowerCase())
            })


    const submitHandler = async (event) => {

        event.preventDefault();

        try {
            await router.push(`/partners/${partnerURL}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={'w-4/5 md:w-1/2 mx-auto mt-20 md:mt-12'}>
            <form onSubmit={submitHandler}>
                <Combobox as="div" value={selectedPerson} onChange={setSelectedPerson}>
                    <div className="relative">
                        <Combobox.Input
                            placeholder="Find a company to waive"
                            className=" text-md w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-gray-800 shadow-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            onChange={(event) => setQuery(event.target.value)}
                            onSelect={(event) => setPartnerURL(event.target.value.toLowerCase().replace(/\s/g, ''))}
                            displayValue={(person) => person?.name}
                        />
                        <Combobox.Button
                            className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                        </Combobox.Button>

                        {filteredPeople.length > 0 && (
                            <Combobox.Options
                                className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {filteredPeople.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        value={person}
                                        className={({active}) =>
                                            classNames(
                                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                                active ? 'bg-primary text-white' : 'text-gray-900'
                                            )
                                        }
                                    >
                                        {({active, selected}) => (
                                            <>
                                            <span
                                                className={classNames('block truncate', selected && 'font-semibold')}>{person.name}</span>

                                                {selected && (
                                                    <span
                                                        className={classNames(
                                                            'absolute inset-y-0 right-0 flex items-center pr-4',
                                                            active ? 'text-white' : 'text-indigo-600'
                                                        )}
                                                    >
                        <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                      </span>
                                                )}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        )}
                    </div>
                </Combobox>
                <button
                    type="submit"
                    className="shadow-gray-300 shadow-lg flex mx-auto mt-3 bg-primary py-1 px-2 md:py-2 md:px-3 border border-transparent rounded-md text-base font-medium text-secondary hover:bg-primaryHover focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Search
                </button>
            </form>
        </div>
    )
}
