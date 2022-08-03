/**
 * @file pages/partner/[partnerName]/dashboard.js
 * @author Logan Bahr
 * @description Renders the dashboard for the partner.
 * @since 7/15/22
 */

import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import TailwindDashboard from "../../../components/Dashboard/TailwindDashboard";

const Dashboard = () => {

        const {data: session, status} = useSession();

        const [data, setData] = useState([]);
        const [averageAge, setAverageAge] = useState(0);
        const [percentMinors, setPercentMinors] = useState();


        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch('/api/users/fetchUsersData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({partnerName: session?.user?.name}),
                });
                const {allUsersData, avgAgeYears, percentMinors} = await response.json();
                setData(allUsersData);
                setAverageAge(avgAgeYears);
                setPercentMinors(percentMinors);
            }
            fetchData().catch(error => console.log(error));

        }, [session]);


        return (
            <div>
                {status === 'unauthenticated' ? undefined : <TailwindDashboard data={data} avgAge={averageAge} percentMinors={percentMinors}/>}
            </div>
        );
    }
;

export default Dashboard;