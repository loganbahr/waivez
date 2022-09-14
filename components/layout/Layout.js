import Footer from "./Footer/Footer";
import { useSession } from "next-auth/react";
import TailwindHeader from "./Header/TailwindHeader";
import TailwindFooter from "./Footer/TailwindFooter";
import { useRouter } from "next/router";

const Layout = (props) => {
  const { data: session, status } = useSession();

  //console.log(props.children.type.displayName);

  const router = useRouter();

  // github not syncing with aws

  return (
    <div>
      {/*if there is no session and they are not on the dashboard*/}
      {/* {props.children.type.displayName !== "Dashboard" ? (
        <TailwindHeader />
      ) : undefined} */}

      {!router.pathname.includes("dashboard") ? <TailwindHeader /> : undefined}

      <div className={"min-h-screen"}>{props.children}</div>

      {/* {props.children.type.displayName !== "Dashboard" ? (
        <TailwindFooter />
      ) : undefined} */}
      {!router.pathname.includes("dashboard") ? <TailwindFooter /> : undefined}
    </div>
  );
};
export default Layout;
