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

        const findMostPopularState = () => {

            const mostPopularState = '';

            if (allStates.length === 0) {
                return mostPopularState;
            }

            let modeMap = {};

            let maxEl = allStates[0], maxCount = 1;

            for (let i = 0; i < allStates.length; i++) {
                const el = allStates[i];
                if (modeMap[el] == null) {
                    modeMap[el] = 1;
                } else {
                    modeMap[el]++;
                }
                if (modeMap[el] > maxCount) {
                    maxEl = el;
                    maxCount = modeMap[el];
                }
            }
            return maxEl;
        }

        const mostPopularState = findMostPopularState(allStates);

        /******************************MOST POPULAR STATE*****************************/

        res.status(200).json({
            allUsersData,
            avgAgeYears,
            percentMinors,
            mostPopularState
        });
        await client.close();

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }

}