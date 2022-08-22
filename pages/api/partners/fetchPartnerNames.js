/**
 * @file pages/api/partners/fetchPartnerNames.js
 * @author Logan Bahr
 * @description Fetches partner names from the database and returns them as an alphabetized array.
 * @since 7/10/22
 */
import {connectToDatabase} from "../../../lib/db";

export default async function handler(req, res) {

    try {

        if (req.method !== "GET") {
            return;
        }

        // Connect to the database
        const client = await connectToDatabase();

        // Get the database collection
        const db = client.db('waivez');

        // Get the collection of partner names
        const partnersCollection = db.collection('partner');

        console.log('test1');
        // Get the array of partner names
        const allPartnerNames = await partnersCollection.find({}).toArray();

        console.log('test2');
        // map each element in the array to just the partner name
        const partnerNames = allPartnerNames.map(partner => partner.partnerName);

        console.log('test3');
        // alphabetize the array
        partnerNames.sort();

        // return the alphabetized partner names
        res.status(200).json({
            partnerNames
        });
        await client.close();

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}