import Footer from "./Footer/Footer";
import {useSession} from "next-auth/react";
import TailwindHeader from "./Header/TailwindHeader";

const Layout = (props) => {

    const {data: session, status} = useSession();

    return (
        <div>
            {/*if there is no session and they are not on the dashboard*/}
            {status === 'authenticated' && props.children.type.name !== 'Dashboard' ? <TailwindHeader/> : undefined}
            {!session && <TailwindHeader/>}
            {/*<Box minHeight="100vh">{props.children}</Box>*/}
            <div className={'min-h-screen'}>{props.children}</div>
            {!session && <Footer/>}
        </div>
    );
};
export default Layout;
