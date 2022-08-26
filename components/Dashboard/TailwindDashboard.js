/**
 * @file components/Dashboard/TailwindDashboard.js
 * @author Logan Bahr
 * @description Dashboard for the partner.
 * @since 7/15/22
 */

import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  LightningBoltIcon,
  MenuAlt1Icon,
  XIcon,
} from "@heroicons/react/outline";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import WaivezLogoCropped from "../Graphics/WaivezLogoCropped";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import DemographicsPieChart from "./DemographicsPieChart";
import RegionalDistributionRadarChart from "./RegionalDistributionRadarChart";
import DashboardTable from "./DashboardTable";
import { InfinitySpin } from "react-loader-spinner";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TailwindDashboard({
  data,
  avgAge,
  percentMinors,
  mostPopularState,
  ageDemographics,
  regionalDistribution,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dataIsLoading, setDataIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const { data: session, status } = useSession();

  const partnerName = session?.user?.name;
  const partnerURL = partnerName?.toLowerCase()?.replace(/\s/g, "");

  // making sure the data is loaded before rendering the dashboard
  useEffect(() => {
    data && setDataIsLoading(false);
  }, [data]);

  const cards = [
    {
      title: "Most Popular State",
      icon: LightningBoltIcon,
      data: mostPopularState,
    },
    { title: "Average Age", icon: LightningBoltIcon, data: avgAge },
    { title: "Total Users", icon: LightningBoltIcon, data: data.length },
  ];

  return (
    <div>
      {/*need to wait until data is loaded, otherwise component render order is unbalanced -> error*/}
      {dataIsLoading ? (
        <div className="flex items-center justify-center h-screen">
          <InfinitySpin color="#7f00ff" width="200" />
        </div>
      ) : (
        <div className="min-h-full">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-primary">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 right-0 pt-2 -mr-12">
                        <button
                          type="button"
                          className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XIcon
                            className="w-6 h-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex items-center content-center flex-shrink-0 px-4">
                      <WaivezLogoCropped
                        color={"white"}
                        height={50}
                        width={150}
                        className="w-auto h-8"
                      />
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
            <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-primary">
              <div className="flex items-center flex-shrink-0 px-4">
                <Link href={"/"}>
                  <a className={""}>
                    <WaivezLogoCropped
                      color={"#f9f9f9"}
                      height={50}
                      width={200}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 lg:pl-64">
            <div className="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:border-none">
              <button
                type="button"
                className="px-4 text-gray-400 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt1Icon className="w-6 h-6" aria-hidden="true" />
              </button>
              {/* Search bar */}
              <div className="flex justify-between flex-1 px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="flex flex-1">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex w-full md:ml-0"
                  >
                    <label htmlFor="search-field" className="sr-only">
                      Search
                    </label>
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <div
                        className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                        aria-hidden="true"
                      >
                        <SearchIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <input
                        id="search-field"
                        name="search-field"
                        className="block w-full h-full py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 border-transparent focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                        placeholder="Search for a user"
                        type="search"
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                  </form>
                </div>

                <div className="flex items-center ml-4 md:ml-6">
                  {/*<button*/}
                  {/*    type="button"*/}
                  {/*    className="p-1 text-gray-400 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"*/}
                  {/*>*/}
                  {/*    <span className="sr-only">View notifications</span>*/}
                  {/*    <BellIcon className="w-6 h-6" aria-hidden="true"/>*/}
                  {/*</button>*/}

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                        <span className="hidden ml-3 text-sm font-medium text-gray-700 lg:block">
                          <span className="sr-only">Open user menu for </span>
                          {session?.user?.name}
                        </span>
                        <ChevronDownIcon
                          className="flex-shrink-0 w-5 h-5 ml-1 text-primary lg:block"
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
                      <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={`/partner/${partnerURL}/profile`}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href={`/partner/${partnerURL}/settings`}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={async () => {
                                await signOut({ callbackUrl: "/" });
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
                  <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                    <div className="flex-1 min-w-0">
                      {/* Profile */}
                      <div className="flex items-center">
                        <div>
                          <div className="flex items-center">
                            <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                              {session?.user?.name}
                            </h1>
                          </div>
                          <dl className="flex flex-col mt-6 sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                            <dd className="flex items-center -mt-4 text-sm font-medium text-gray-500 capitalize sm:mr-6 sm:mt-0">
                              <CheckCircleIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-primary"
                                aria-hidden="true"
                              />
                              {status}
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-6 space-x-3 md:mt-0 md:ml-4">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Contact Support
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primaryHover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Documentation
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                {/*********************OVERVIEW STATS*********************/}
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                  <h2 className="text-lg font-medium leading-6 text-gray-900">
                    Overview
                  </h2>
                  <div className="grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {cards.map((card) => (
                      <div
                        key={card.title}
                        className="overflow-hidden bg-white rounded-lg shadow"
                      >
                        <div className="p-5">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <card.icon
                                className="w-6 h-6 text-primary"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="flex-1 w-0 ml-5">
                              <dl>
                                <dt className="text-sm font-medium text-gray-500 truncate">
                                  {card.title}
                                </dt>
                                <dd>
                                  <div className="text-lg font-medium text-gray-900">
                                    {card.data}
                                  </div>
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
                <div
                  className={
                    "p-5 grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-[1500px] mx-auto"
                  }
                >
                  {!dataIsLoading && (
                    <DemographicsPieChart ageDemographics={ageDemographics} />
                  )}
                  {!dataIsLoading && (
                    <RegionalDistributionRadarChart
                      regionalDistribution={regionalDistribution}
                    />
                  )}
                </div>

                {/*****************************TABLE*****************************/}
                {!dataIsLoading && <DashboardTable query={query} data={data} />}
              </div>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}
