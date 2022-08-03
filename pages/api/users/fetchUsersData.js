/**
 * @file pages/api/users/fetchUsersData.js
 * @author Logan Bahr
 * @description Fetches user data from the database and returns it as an array.
 * Called from pages/partner/[partnerName]/dashboard.js
 * @since 7/20/22
 */

import {connectToDatabase} from "../../../lib/db";

export default async function handler(req, res) {

    try {

        if (req.method !== "POST") {
            return;
        }

        // Connect to the database
        const client = await connectToDatabase();

        // Get the database collection
        const db = client.db('waivez');

        // Get the collection of user data
        const usersCollection = db.collection('users');

        // Get the array of all users data
        const allUsersData = await usersCollection.find({partnerName: req.body.partnerName}).toArray();

        /******************************AVERAGE AGE************************************/
            // extract the date of birth from each user
        const allDates = allUsersData.map(user => user.dateOfBirth);

        // convert the date to a string, with the substring of the year only (ex. "2020")
        const allDatesString = allDates.map(date => date.toString().substring(11, 15));

        // convert the string to a number (ex. 2020)
        const allDatesNumber = allDatesString.map(date => parseInt(date));

        // calculate the average age
        // (a, b) => a + b is called for each number in the array, where 'a' is the current number and 'b' is the next number
        // the second argument, '0' is the initial value of the accumulator
        const avgAge = Math.round(allDatesNumber.reduce((a, b) => a + b, 0) / allDatesNumber.length);


        // subtract the current year from the average age and take absolute value
        const avgAgeYears = Math.abs(new Date().getFullYear() - avgAge);
        /******************************AVERAGE AGE************************************/

        /******************************PERCENT MINORS*********************************/
        const allMinors = allUsersData.filter(user => user.minors === true);
        const percentMinors = Math.round((allMinors.length / allUsersData.length) * 100);
        /******************************PERCENT MINORS*********************************/

        /******************************MOST POPULAR STATE*****************************/
        const allStates = allUsersData.map(user => user.state);

        const alabamaCount = allStates.filter(state => state === "Alabama").length;
        const alaskaCount = allStates.filter(state => state === "Alaska").length;
        const arizonaCount = allStates.filter(state => state === "Arizona").length;
        const arkansasCount = allStates.filter(state => state === "Arkansas").length;
        const californiaCount = allStates.filter(state => state === "California").length;
        const coloradoCount = allStates.filter(state => state === "Colorado").length;
        const connecticutCount = allStates.filter(state => state === "Connecticut").length;
        const delawareCount = allStates.filter(state => state === "Delaware").length;
        const floridaCount = allStates.filter(state => state === "Florida").length;
        const georgiaCount = allStates.filter(state => state === "Georgia").length;
        const hawaiiCount = allStates.filter(state => state === "Hawaii").length;
        const idahoCount = allStates.filter(state => state === "Idaho").length;
        const illinoisCount = allStates.filter(state => state === "Illinois").length;
        const indianaCount = allStates.filter(state => state === "Indiana").length;
        const iowaCount = allStates.filter(state => state === "Iowa").length;
        const kansasCount = allStates.filter(state => state === "Kansas").length;
        const kentuckyCount = allStates.filter(state => state === "Kentucky").length;
        const louisianaCount = allStates.filter(state => state === "Louisiana").length;
        const maineCount = allStates.filter(state => state === "Maine").length;
        const marylandCount = allStates.filter(state => state === "Maryland").length;
        const massachusettsCount = allStates.filter(state => state === "Massachusetts").length;
        const michiganCount = allStates.filter(state => state === "Michigan").length;
        const minnesotaCount = allStates.filter(state => state === "Minnesota").length;
        const mississippiCount = allStates.filter(state => state === "Mississippi").length;
        const missouriCount = allStates.filter(state => state === "Missouri").length;
        const montanaCount = allStates.filter(state => state === "Montana").length;
        const nebraskaCount = allStates.filter(state => state === "Nebraska").length;
        const nevadaCount = allStates.filter(state => state === "Nevada").length;
        const newHampshireCount = allStates.filter(state => state === "New Hampshire").length;
        const newJerseyCount = allStates.filter(state => state === "New Jersey").length;
        const newMexicoCount = allStates.filter(state => state === "New Mexico").length;
        const newYorkCount = allStates.filter(state => state === "New York").length;
        const northCarolinaCount = allStates.filter(state => state === "North Carolina").length;
        const northDakotaCount = allStates.filter(state => state === "North Dakota").length;
        const ohioCount = allStates.filter(state => state === "Ohio").length;
        const oklahomaCount = allStates.filter(state => state === "Oklahoma").length;
        const oregonCount = allStates.filter(state => state === "Oregon").length;
        const pennsylvaniaCount = allStates.filter(state => state === "Pennsylvania").length;
        const rhodeIslandCount = allStates.filter(state => state === "Rhode Island").length;
        const southCarolinaCount = allStates.filter(state => state === "South Carolina").length;
        const southDakotaCount = allStates.filter(state => state === "South Dakota").length;
        const tennesseeCount = allStates.filter(state => state === "Tennessee").length;
        const texasCount = allStates.filter(state => state === "Texas").length;
        const utahCount = allStates.filter(state => state === "Utah").length;
        const vermontCount = allStates.filter(state => state === "Vermont").length;
        const virginiaCount = allStates.filter(state => state === "Virginia").length;
        const washingtonCount = allStates.filter(state => state === "Washington").length;
        const wisconsinCount = allStates.filter(state => state === "Wisconsin").length;
        const wyomingCount = allStates.filter(state => state === "Wyoming").length;


        /******************************MOST POPULAR STATE*****************************/

        res.status(200).json({
            allUsersData,
            avgAgeYears,
            percentMinors,
        });
        await client.close();

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }

}