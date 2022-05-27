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
import {signInWithEmailAndPassword} from "firebase/auth";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            type: 'credentials',
            async authorize(credentials) {
                const user = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
                return {email: user.email};
            },
        })
    ],
    pages: {
        signIn: '/auth/signin',
    }
})