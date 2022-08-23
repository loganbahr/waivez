/**
 * @file pages\auth\signin.js
 * @author Logan Bahr
 * @description Sign in page. The file name is not capitalized because it is a page.
 * We don't have an index.js file because we don't want to have a default page.
 * This brings you to www.waivez.com/auth/signin
 * @since 5/22/22
 */

import React from "react";
import { useSession, getCsrfToken } from "next-auth/react";
import TailwindSignIn from "../../components/Pages/Auth/TailwindSignIn";
import Logo from "../../components/Graphics/Logo";
import Link from "next/link";
import { toast, Toast, Toaster, useToaster } from "react-hot-toast";

const SignIn = ({ csrfToken }) => {
  const { data: session, status } = useSession();

  return (
    <div className={"max-w-7xl pt-40 mx-auto"}>
      <div className={"mx-auto text-center"}>
        {status === "unauthenticated" ? (
          <h1
            className={
              "text-slate-900 text-2xl md:text-4xl font-bold text-center mb-14"
            }
          >
            Sign in to your{" "}
            <span className={"inline-flex translate-y-6"}>
              {" "}
              <Logo color={"#7f00ff"} width={70} height={70} />{" "}
            </span>{" "}
            account
          </h1>
        ) : (
          <h1
            className={
              "text-slate-900 text-2xl md:text-4xl font-bold text-center mb-14"
            }
          >
            You&apos;re already signed in to your
            <span className={"inline-flex translate-y-6"}>
              {" "}
              <Logo color={"#7f00ff"} width={70} height={70} />{" "}
            </span>{" "}
            account
          </h1>
        )}
      </div>

      <TailwindSignIn csrfToken={csrfToken} />

      <div className={"mx-auto text-center mt-4"}>
        <h1 className={"text-base font-medium text-gray-500 mx-20"}>
          Not a partner yet? Head over to our{" "}
          <Link href={"/pricing"} passHref={true}>
            <span className={"text-primary cursor-pointer"}>pricing page</span>
          </Link>{" "}
          to join!
        </h1>
      </div>
    </div>
  );
};

export default SignIn;

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
