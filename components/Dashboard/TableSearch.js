import React from 'react';

const TableSearch = () => {
    return (
        <div className={'max-w-6xl'}>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <div className="pb-4 bg-white dark:bg-gray-900">
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="table-search"
                               className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search for items"/>
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Product name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Color
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Category
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17
                        </th>
                        <td className="py-4 px-6">
                            Sliver
                        </td>
                        <td className="py-4 px-6">
                            Laptop
                        </td>
                        <td className="py-4 px-6">
                            $2999
                        </td>
                        <td className="py-4 px-6">
                            <a href="#"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-2" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td className="py-4 px-6">
                            White
                        </td>
                        <td className="py-4 px-6">
                            Laptop PC
                        </td>
                        <td className="py-4 px-6">
                            $1999
                        </td>
                        <td className="py-4 px-6">
                            <a href="#"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-3" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="py-4 px-6">
                            Black
                        </td>
                        <td className="py-4 px-6">
                            Accessories
                        </td>
                        <td className="py-4 px-6">
                            $99
                        </td>
                        <td className="py-4 px-6">
                            <a href="#"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-3" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-3" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple Watch
                        </th>
                        <td className="py-4 px-6">
                            Silver
                        </td>
                        <td className="py-4 px-6">
                            Accessories
                        </td>
                        <td className="py-4 px-6">
                            $179
                        </td>
                        <td className="py-4 px-6">
                            <a href="#"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-3" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-3" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            iPad
                        </th>
                        <td className="py-4 px-6">
                            Gold
                        </td>
                        <td className="py-4 px-6">
                            Tablet
                        </td>
                        <td className="py-4 px-6">
                            $699
                        </td>
                        <td className="py-4 px-6">
                            <a href="#"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="p-4 w-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-3" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-3" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <th scope="row"
                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple iMac 27
                        </th>
                        <td className="py-4 px-6">
                            Silver
                        </td>
                        <td className="py-4 px-6">
                            PC Desktop
                        </td>
                        <td className="py-4 px-6">
                            $3999
                        </td>
                        <td className="py-4 px-6">
                            <a href="#"
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default TableSearch;
