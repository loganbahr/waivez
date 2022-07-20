import React, {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";
import TailwindDashboard from "../../../components/Dashboard/TailwindDashboard";

const Dashboard = () => {

        const {data: session, status} = useSession();

        const [data, setData] = useState([]);


        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch('/api/users/fetchUsersData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({partnerName: session?.user?.name}),
                });

                const {allUsersData} = await response.json();
                setData(allUsersData);
            }
            fetchData().catch(error => console.log(error));
        }, [session]);

        return (
            <div>
                <TailwindDashboard data={data}/>
            </div>

        );
    }
;

export default Dashboard;