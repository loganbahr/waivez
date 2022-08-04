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


        /***************************ALL TABLE DATA***************************************/
            // Get the array of all users data from the given partner
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

        /*******************************AGE DEMOGRAPHICS***********************************/

            // find the current age of each user
        const currentAge = allDatesNumber.map(date => Math.abs(new Date().getFullYear() - date));

        // number of users between each age group
        const age18to24 = currentAge.filter(age => age >= 18 && age <= 24).length;
        const age25to34 = currentAge.filter(age => age >= 25 && age <= 34).length;
        const age35to44 = currentAge.filter(age => age >= 35 && age <= 44).length;
        const age45to54 = currentAge.filter(age => age >= 45 && age <= 54).length;
        const age55to64 = currentAge.filter(age => age >= 55 && age <= 64).length;
        const age65plus = currentAge.filter(age => age >= 65).length;

        // package the age demographics into an object
        const ageDemographics = {
            age18to24,
            age25to34,
            age35to44,
            age45to54,
            age55to64,
            age65plus,
        }

        /******************************PERCENT MINORS*********************************/
        const allMinors = allUsersData.filter(user => user.minors === true);
        const percentMinors = Math.round((allMinors.length / allUsersData.length) * 100);

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

        const mostPopularState = findMostPopularState();

        /******************************REGIONAL DISTRIBUTION***************************/

        const calculateRegion = () => {

                let west = 0;
                let midwest = 0;
                let northeast = 0;
                let south = 0;
                let pacific = 0;

            allStates.forEach(state => {
                if (state === 'Arizona' ||
                    state === 'Colorado' ||
                    state === 'Idaho' ||
                    state === 'Montana' ||
                    state === 'Nevada' ||
                    state === 'New Mexico' ||
                    state === 'Utah' ||
                    state === 'Wyoming') {
                    west++;
                } else if (
                    state === 'Alaska' ||
                    state === 'Hawaii' ||
                    state === 'Washington' ||
                    state === 'Oregon' ||
                    state === 'California') {
                    pacific++
                } else if (
                    state === 'Delaware' ||
                    state === 'District of Columbia' ||
                    state === 'Florida' ||
                    state === 'Georgia' ||
                    state === 'Maryland' ||
                    state === 'North Carolina' ||
                    state === 'South Carolina' ||
                    state === 'Virginia' ||
                    state === 'West Virginia' ||
                    state === 'Alabama' ||
                    state === 'Kentucky' ||
                    state === 'Mississippi' ||
                    state === 'Tennessee' ||
                    state === 'Arkansas' ||
                    state === 'Louisiana' ||
                    state === 'Oklahoma' ||
                    state === 'Texas') {
                    south++;
                } else if (
                    state === 'Indiana' ||
                    state === 'Illinois' ||
                    state === 'Michigan' ||
                    state === 'Ohio' ||
                    state === 'Wisconsin' ||
                    state === 'Iowa' ||
                    state === 'Kansas' ||
                    state === 'Minnesota' ||
                    state === 'Missouri' ||
                    state === 'Nebraska' ||
                    state === 'North Dakota' ||
                    state === 'South Dakota') {
                    midwest++;
                } else if (
                    state === 'Connecticut' ||
                    state === 'Maine' ||
                    state === 'Massachusetts' ||
                    state === 'New Hampshire' ||
                    state === 'Rhode Island' ||
                    state === 'Vermont' ||
                    state === 'New Jersey' ||
                    state === 'New York' ||
                    state === 'Pennsylvania') {
                    northeast++;
                }
            });

            // package the regional distribution into an object
            return {
                west,
                midwest,
                northeast,
                south,
                pacific,
            };
        }
        const regionalDistribution = calculateRegion();

        /*******************************RETURN DATA***********************************/

        res.status(200).json({
            allUsersData,
            avgAgeYears,
            ageDemographics,
            percentMinors,
            mostPopularState,
            regionalDistribution
        });
        await client.close();

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }

}