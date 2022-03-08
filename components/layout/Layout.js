import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";

function Layout(props){
    return(
        <div>
            <NavBar/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    )
}
export default Layout;