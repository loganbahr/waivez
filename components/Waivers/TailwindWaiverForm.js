import React, {useState} from 'react';
import {Combobox} from '@headlessui/react'
import {CheckIcon, SelectorIcon} from "@heroicons/react/solid";

const TailwindWaiverForm = () => {
    const months = [
        {id: 1, month: 'January'},
        {id: 2, month: 'February'},
        {id: 3, month: 'March'},
        {id: 4, month: 'April'},
        {id: 5, month: 'May'},
        {id: 6, month: 'June'},
        {id: 7, month: 'July'},
        {id: 8, month: 'August'},
        {id: 9, month: 'September'},
        {id: 10, month: 'October'},
        {id: 11, month: 'November'},
        {id: 12, month: 'December'}
    ];
    const days = [
        {id: 1, day: '1'},
        {id: 2, day: '2'},
        {id: 3, day: '3'},
        {id: 4, day: '4'},
        {id: 5, day: '5'},
        {id: 6, day: '6'},
        {id: 7, day: '7'},
        {id: 8, day: '8'},
        {id: 9, day: '9'},
        {id: 10, day: '10'},
        {id: 11, day: '11'},
        {id: 12, day: '12'},
        {id: 13, day: '13'},
        {id: 14, day: '14'},
        {id: 15, day: '15'},
        {id: 16, day: '16'},
        {id: 17, day: '17'},
        {id: 18, day: '18'},
        {id: 19, day: '19'},
        {id: 20, day: '20'},
        {id: 21, day: '21'},
        {id: 22, day: '22'},
        {id: 23, day: '23'},
        {id: 24, day: '24'},
        {id: 25, day: '25'},
        {id: 26, day: '26'},
        {id: 27, day: '27'},
        {id: 28, day: '28'},
        {id: 29, day: '29'},
        {id: 30, day: '30'},
        {id: 31, day: '31'}
    ];
    const years = [
        ...Array.from({length: (new Date().getFullYear() - 1910 + 1)}, (v, k) => k + 1910).map(year => year.toString())
    ];

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [day, setDay] = useState(days[0].day.toString());
    const [dayQuery, setDayQuery] = useState('');

    const [year, setYear] = useState('');
    const [yearQuery, setYearQuery] = useState('');

    const [month, setMonth] = useState(months[0].month.toString());
    const [monthQuery, setMonthQuery] = useState('');

    const filteredDays =
        day === ''
            ? days
            : days.filter((day) => {
                return day.day.toLowerCase().includes(dayQuery.toLowerCase())
            });

    const filteredMonths =
        month === ''
            ? months
            : months.filter((month) => {
                return month.month.toLowerCase().includes(monthQuery.toLowerCase())
            });

    return (
        <div>
            <form
                className="space-y-8 divide-y divide-gray-200 border border-gray-300 rounded-2xl px-4 pb-4 bg-gray-100 max-w-6xl mx-auto">
                <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                    <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Use the information found on your legal
                                drivers license.</p>
                        </div>
                        <div className="space-y-6 sm:space-y-5">
                            <div
                                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    First name
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="max-w-lg block w-full shadow-sm focus:ring-primary focus:border-primary sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div
                                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Last name
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="max-w-lg block w-full shadow-sm focus:ring-primary focus:border-primary sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            {/*DATE OF BIRTH*/}
                            <div
                                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 space-y-2">
                                <label htmlFor="dob"
                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Date of Birth
                                </label>
                                <div className="flex flex-col space-y-3 lg:flex-row lg:space-y-0 lg:space-x-2">
                                    {/*******************************************************************************************************/}



                                    {/*******************************************************************************************************/}
                                </div>
                            </div>

                            <div
                                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="email"
                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Email address
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block max-w-lg w-full shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div
                                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="street-address"
                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    Street address
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="block max-w-lg w-full shadow-sm focus:ring-primary focus:border-primary sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div
                                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="city"
                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    City
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="max-w-lg block w-full shadow-sm focus:ring-primary focus:border-primary sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div
                                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="region"
                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    State
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="max-w-lg block w-full shadow-sm focus:ring-primary focus:border-primary sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div
                                className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                                <label htmlFor="postal-code"
                                       className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-1 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="max-w-lg block w-full shadow-sm focus:ring-primary focus:border-primary sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TailwindWaiverForm;
