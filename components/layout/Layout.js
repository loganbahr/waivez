import Footer from "./Footer/Footer";
import { useSession } from "next-auth/react";
import TailwindHeader from "./Header/TailwindHeader";
import TailwindFooter from "./Footer/TailwindFooter";

const Layout = (props) => {
  const { data: session, status } = useSession();

  console.log(props.children.type.name);

  return (
    <div>
      {/*if there is no session and they are not on the dashboard*/}
      {props.children.type.name !== "Dashboard" ? (
        <TailwindHeader />
      ) : undefined}

      <div className={"min-h-screen"}>{props.children}</div>

      {props.children.type.name !== "Dashboard" ? (
        <TailwindFooter />
      ) : undefined}
    </div>
  );
};
export default Layout;
