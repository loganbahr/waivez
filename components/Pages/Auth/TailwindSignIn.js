/**
 * @file components\Pages\Auth\TailwindSignIn.js
 * @author Logan Bahr
 * @description Component with dropdown menu for selecting a partner, a field for password, and a submit button.
 * Dropdown menu pulls the list of partners from the database.
 * @since 7/15/22
 */
import React, { useEffect } from "react";
import { useState } from "react";
import {
  CheckIcon,
  ExclamationCircleIcon,
  SelectorIcon,
  XIcon,
} from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { hashPassword } from "../../../lib/auth";
import { toast } from "react-hot-toast";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TailwindSignIn = () => {
  const [query, setQuery] = useState("");
  const [selectedPartner, setSelectedPartner] = useState();
  const [partnerNamesArray, setPartnerNamesArray] = useState([]);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const selectedPartnerName = selectedPartner?.name;

  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/partners/fetchPartnerNames", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      // destructuring the response to get the partner names
      const { partnerNames } = await response.json();

      // map an id to each partner name
      const partnerNamesWithIds = partnerNames.map((partnerName, index) => {
        return {
          id: index + 1,
          name: partnerName,
        };
      });
      setPartnerNamesArray(partnerNamesWithIds);
      setLoading(false);
    };
    // call the fetchData function
    fetchData().catch((error) => console.log(error));
  }, []);

  const filteredPartners =
    query === ""
      ? partnerNamesArray
      : partnerNamesArray.filter((person) => {
          return person.name
            .toString()
            .toLowerCase()
            .includes(query.toLowerCase());
        });

  const submitHandler = async (event) => {
    event.preventDefault();

    // encrypting password before sending to backend
    const hashedPassword = await hashPassword(password);

    // formatting the partner name for correct URL
    const partnerURL = selectedPartner?.name.toLowerCase().replace(/\s/g, "");

    // next-auth sign in function that redirects to the partner's dashboard
    try {
      const result = await signIn("credentials", {
        name: selectedPartnerName,
        password: hashedPassword,
        callbackUrl: `/partner/${partnerURL}/dashboard`,
      });
      setError(result?.error);
    } catch (error) {
      console.log(error);
    }
    setPassword("");
  };

  return (
    <div
      className={
        "flex flex-col max-w-xl border p-4 lg:p-10 rounded-xl border-gray-300 shadow-md mx-4 sm:mx-auto"
      }
    >
      <form onSubmit={submitHandler}>
        {/*Combobox for Partner Name*/}
        <Combobox
          as="div"
          value={selectedPartner}
          onChange={setSelectedPartner}
        >
          <Combobox.Label className="block text-sm font-medium text-gray-700">
            Partner Name
          </Combobox.Label>
          <div className="relative mt-1">
            <Combobox.Input
              className="w-full py-2 pl-3 pr-10 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(person) => person?.name}
            />

            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center px-2 rounded-r-md focus:outline-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>

            {filteredPartners.length > 0 && (
              <Combobox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredPartners.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    value={person}
                    className={({ active }) =>
                      classNames(
                        "relative cursor-default select-none py-2 pl-3 pr-9",
                        active ? "bg-primary text-white" : "text-gray-900"
                      )
                    }
                  >
                    {({ active, selected }) => (
                      <>
                        <span
                          className={classNames(
                            "block truncate",
                            selected && "font-semibold"
                          )}
                        >
                          {person.name}
                        </span>

                        {selected && (
                          <span
                            className={classNames(
                              "absolute inset-y-0 right-0 flex items-center pr-4",
                              active ? "text-white" : "text-indigo-600"
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
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

        {/*input for password*/}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              name="password"
              id="password"
              className="block w-full text-black border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />
          </div>

          <div className={"flex justify-center"}>
            {/*Button for Sign In*/}
            {!session ? (
              <button type="submit" className="mt-2 btn-primary">
                Sign In
              </button>
            ) : undefined}
          </div>
        </div>
      </form>
      {error && <h1 className="text-center text-red-500">{error}</h1>}
    </div>
  );
};

export default TailwindSignIn;
