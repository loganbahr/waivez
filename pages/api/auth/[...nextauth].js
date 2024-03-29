/**
 * @file pages\api\auth\[...nextauth].js
 * @author Logan Bahr
 * @description Next-Auth configuration for Next.js
 * @since 5/22/22
 */
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDatabase } from "../../../lib/db";
import { comparePassword } from "../../../lib/auth";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  site: process.env.NEXTAUTH_URL,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        try {
          const client = await connectToDatabase();

          const partnersCollection = client?.db("waivez").collection("partner");

          const partner = await partnersCollection?.findOne({
            partnerName: credentials.name,
          });
          // console.log(user);

          const { adminPassword } = partner;
          // console.log(adminPassword);

          const properties = JSON?.parse(JSON.stringify(partner));
          // console.log(properties);

          if (!partner) {
            await client.close();
            new Error("No user found.");
          }

          let isValid = false;

          // compare password return a boolean value. If true, then the password is correct
          isValid = await comparePassword(adminPassword, credentials.password);

          if (!isValid) {
            await client.close();
            console.log("Invalid password.");
            new Error("Invalid password.");
          } else {
            await client.close();

            // need to explicitly assign the name of the partner to the session
            return { ...partner, name: partner.partnerName };
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: `/auth/signin`,
  },
});
