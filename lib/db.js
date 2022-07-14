import {MongoClient} from 'mongodb';

export const connectToDatabase = async () => {
    return await MongoClient.connect('mongodb+srv://LBThree:3gL4Tjn5reeqMEz@cluster0.uzbiq.mongodb.net/?retryWrites=true&w=majority');
}