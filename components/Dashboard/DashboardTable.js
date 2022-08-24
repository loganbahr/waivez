import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import Axios from "axios";
import WaiverRenderer from "../Waivers/WaiverRenderer";
import WaiverTabRenderer from "../Waivers/WaiverTabRenderer";
import { WaiverModal } from "./WaiverModal";

const DashboardTable = ({ query, data }) => {
  const TABLE_LENGTH = 15;

  const { data: session, status } = useSession();

  const [numPages, setNumPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (filteredUsers?.length > TABLE_LENGTH) {
      setNumPages(Math.trunc(data?.length / TABLE_LENGTH + 1));
    }
    if (filteredUsers?.length < TABLE_LENGTH) {
      setNumPages(1);
    }
  }, [data?.length, filteredUsers?.length]);

  const filteredUsers =
    query === ""
      ? data
      : data.filter((user) => {
          return (
            user.firstName.toLowerCase().includes(query.toLowerCase().trim()) ||
            user.lastName.toLowerCase().includes(query.toLowerCase().trim())
          );
        });

  // reduce filteredUsers to only show TABLE_LENGTH users per page
  const users = filteredUsers.slice(
    (currentPage - 1) * TABLE_LENGTH,
    currentPage * TABLE_LENGTH
  );

  const nextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const viewWaiver = async (person) => {
    const waiver = await Axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/lookupWaivers`,
      {
        params: {
          firstName: person.firstName,
          lastName: person.lastName,
          dateOfBirth: person.dateOfBirth,
        },
      }
    );
    console.log(waiver.data.signedWaivers);
    return <WaiverModal />;
  };

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
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
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
          >
            Add user
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      First
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Last
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      DOB
                    </th>
                    <th
                      scope="col"
                      className="hidden sm:table-cell py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      State
                    </th>

                    <th
                      scope="col"
                      className="hidden xl:table-cell px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      City
                    </th>
                    <th
                      scope="col"
                      className="px-3 hidden xl:table-cell py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-3 hidden md:table-cell py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 hidden lg:table-cell py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">View</span>
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white">
                  {users?.map((person, personIdx) => (
                    <tr
                      key={person._id}
                      className={
                        personIdx % 2 === 0
                          ? "bg-white hover:bg-gray-100"
                          : "bg-gray-50 hover:bg-gray-100"
                      }
                    >
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        {person.firstName}
                      </td>
                      <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6">
                        {person.lastName}
                      </td>
                      <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {person.dateOfBirth}
                      </td>

                      <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell whitespace-nowrap">
                        {person.address.state}
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 xl:table-cell whitespace-nowrap">
                        {person.address.city}
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 xl:table-cell whitespace-nowrap">
                        {person.address.line}
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell whitespace-nowrap">
                        {person.email}
                      </td>
                      <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell whitespace-nowrap">
                        {person.phoneNumber}
                      </td>
                      <td
                        className="relative py-4 pl-3 pr-4 text-sm font-medium text-right cursor-pointer whitespace-nowrap sm:pr-6"
                        onClick={() => viewWaiver(person)}
                      >
                        View
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/*PAGINATION*/}
              <nav className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex flex-1 w-0">
                  <div
                    className={
                      filteredUsers.length < TABLE_LENGTH
                        ? "hidden"
                        : "group cursor-pointer pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                    }
                    onClick={() => previousPage()}
                  >
                    <ArrowNarrowLeftIcon
                      className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-700"
                      aria-hidden="true"
                    />
                    Previous
                  </div>
                </div>

                {numPages > 6 ? (
                  <div className="md:-mt-px md:flex">
                    {Array.from({ length: 3 }, (_, i) => (
                      <div
                        key={i}
                        className={
                          i + 1 === currentPage
                            ? "border-transparent cursor-pointer text-primary hover:text-primaryHover hover:border-primary border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            : "border-transparent cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                        }
                        //className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent cursor-pointer hover:text-gray-700 hover:border-gray-300"
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </div>
                    ))}

                    {currentPage > 3 && currentPage < numPages - 2 ? (
                      <span className={"text-lg pt-4 px-4"}>{currentPage}</span>
                    ) : (
                      <span className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent">
                        ...
                      </span>
                    )}

                    {Array.from({ length: 3 }, (_, i) => (
                      <div
                        key={i}
                        className={
                          numPages - 2 + i === currentPage
                            ? "border-transparent cursor-pointer text-primary hover:text-primaryHover hover:border-primary border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            : "border-transparent cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                        }
                        onClick={() => setCurrentPage(numPages - 2 + i)}
                      >
                        {numPages - 2 + i}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="md:-mt-px md:flex">
                    {Array.from({ length: numPages }, (_, i) => (
                      <div
                        key={i}
                        className={
                          i + 1 === currentPage
                            ? "border-transparent cursor-pointer text-primary hover:text-primaryHover hover:border-primary border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                            : "border-transparent cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                        }
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-end flex-1 w-0 -mt-px">
                  <div
                    className={
                      filteredUsers.length < TABLE_LENGTH
                        ? "hidden"
                        : "group cursor-pointer pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                    }
                    onClick={() => nextPage()}
                  >
                    Next
                    <ArrowNarrowRightIcon
                      className="w-5 h-5 ml-3 text-gray-400 group-hover:text-gray-700"
                      aria-hidden="true"
                    />
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
