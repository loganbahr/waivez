/**
 * @file pages\api\auth\[...nextauth].js
 * @author Logan Bahr
 * @description Next-Auth configuration for Next.js
 * @since 5/22/22
 */
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import {auth} from "/firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // authorization: {
            //     params: {
            //         prompt: 'consent',
            //         access_type: 'offline',
            //         response_type: 'code',
            //     }
            // }
        }),
        // ...add more providers here
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {label: 'Email', type: 'email'},
                password: {label: 'Password', type: 'password'},
            },
            async authorize(credentials) {
                try {
                    await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
                    console.log('authorized');
                } catch (e) {
                    console.log(e);
                    console.log('error')
                }
            }
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    }
})