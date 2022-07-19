import React from 'react';
import {signOut, useSession} from "next-auth/react";
import PricingPlans from "../../../components/Cards/PricingPlans";
import PersonalData from "../../../components/Dashboard/PersonalData";
import TableSearch from "../../../components/Dashboard/TableSearch";
import TailwindDashboard from "../../../components/Dashboard/TailwindDashboard";

const Dashboard = () => {

    const {data: session, status} = useSession();

    return (

        // <div className={'flex justify-center items-center flex-col h-screen'}>
        //     {status !== 'authenticated' ? <div>{"You are " + status + ". Please sign in."}</div> : null}
        //
        //     <div className={''}>
        //         <h1 className={'text-2xl'}>{session?.user?.name}</h1>
        //     </div>
        //
        //     {session && <button
        //         onClick={() => signOut({callbackUrl: '/auth/signin'})}
        //         type="button"
        //         className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#7f00ff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7f00ff] focus:shadow-outline-red-600 my-5"
        //     >
        //         Sign Out
        //     </button>}
        // </div>
        <div>
            <TailwindDashboard/>
        </div>


    );
};

export default Dashboard;