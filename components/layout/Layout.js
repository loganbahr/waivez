import NavBar from "./Header/NavBar";
import Footer from "./Footer/Footer";
import classes from './Layout.module.css'

function Layout(props){
    return(
        <div>
            <NavBar/>
            <main className={classes.content}>{props.children}</main>
            <Footer/>
        </div>
    )
}
export default Layout;