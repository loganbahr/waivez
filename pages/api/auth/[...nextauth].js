/**
 * @file pages\api\auth\[...nextauth].js
 * @author Logan Bahr
 * @description Next-Auth configuration for Next.js
 * @since 5/22/22
 */
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {connectToDatabase} from "../../../lib/db";
import {comparePassword} from "../../../lib/auth";
import {useSession} from "next-auth/react";

export default NextAuth({
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                try {
                    const client = await connectToDatabase();

                    const partnersCollection = client?.db("waivez").collection("partner");

                    const partner = await partnersCollection?.findOne({partnerName: credentials.partnerName});
                    // console.log(partner);

                    const {adminPassword} = partner;
                    // console.log(adminPassword);

                    const properties = JSON?.parse(JSON.stringify(partner));
                    // console.log(properties);

                    if (!partner) {
                        await client.close();
                        new Error('No user found.');
                    }

                    let isValid = false;

                    isValid = adminPassword === credentials.password;

                    if (!isValid) {
                        await client.close();
                        console.log('Invalid password.');
                        new Error('Invalid password.');
                    } else {

                        await client.close();

                        // return {partnerName: partner.partnerName};
                        return partner;
                    }

                } catch (error) {
                    console.log(error);
                }
            }
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    secret: process.env.NEXTAUTH_URL,
    

})