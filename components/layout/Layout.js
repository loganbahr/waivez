import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";

function Layout(props){
    return(
        <div>
            <NavBar/>
            <main>{props.children}</main>
        </div>
    )
}
export default Layout;