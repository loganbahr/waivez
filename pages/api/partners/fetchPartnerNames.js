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

        // Get the array of partner names
        const allPartnerNames = await partnersCollection.find({}).toArray();

        // map each element in the array to just the partner name
        const partnerName = allPartnerNames.map(partner => partner.partnerName);

        // alphabetize the array
        partnerName.sort();

        // return the alphabetized partner names
        res.status(200).json({
            partnerName
        });
        await client.close();

    } catch (error) {
        console.log(error);
        res.status(500).json({message: error.message});
    }
}