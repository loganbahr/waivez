/**
 * @file pages/api/users/fetchUsersData.js
 * @author Logan Bahr
 * @description Fetches user data from the database and returns it as an array.
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

        // Get the array of user data
        const allUsersData = await usersCollection.find({partnerName: req.body.partnerName}).toArray();

        res.status(200).json({
            allUsersData
        });
        await client.close();

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }

}