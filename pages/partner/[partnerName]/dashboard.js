/**
 * @file pages/partner/[partnerName]/dashboard.js
 * @author Logan Bahr
 * @description Renders the dashboard for the partner.
 * @since 7/15/22
 */

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import TailwindDashboard from "../../../components/Dashboard/TailwindDashboard";
import Error404Page from "../../404";
import Head from "next/head";
import { InfinitySpin } from "react-loader-spinner";

const Dashboard = () => {
  Dashboard.displayName = "Dashboard";

  const { data: session, status } = useSession();

  const [data, setData] = useState([]);
  const [averageAge, setAverageAge] = useState(0);
  const [percentMinors, setPercentMinors] = useState();
  const [mostPopularState, setMostPopularState] = useState();
  const [ageDemos, setAgeDemos] = useState([]);
  const [regionDemos, setRegionDemos] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // grabs all the dashboard data from database
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/users/fetchUsersDataWaivez", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ partnerName: session?.user?.name }),
      });
      const {
        allUsersData,
        avgAgeYears,
        ageDemographics,
        mostPopularState,
        regionalDistribution,
      } = await response.json();

      setData(allUsersData);
      setAverageAge(avgAgeYears);
      setMostPopularState(mostPopularState);
      setAgeDemos(ageDemographics);
      setRegionDemos(regionalDistribution);
      setIsLoading(false);
    };
    fetchData().catch((error) => console.log(error));
  }, [session]);

  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <InfinitySpin color="#7f00ff" width="200" />
        </div>
      )}
      {status === "unauthenticated" ? (
        <Error404Page />
      ) : (
        <TailwindDashboard
          data={data}
          avgAge={averageAge}
          mostPopularState={mostPopularState}
          ageDemographics={ageDemos}
          regionalDistribution={regionDemos}
        />
      )}
    </div>
  );
};
export default Dashboard;
