import {Fragment} from "react";
import Navigation from "./Nav";


const Layout = ({children}) => {
    return (
        <Fragment>
            <Navigation/>
            <main>{children}</main>
        </Fragment>
    )
}

export default Layout;

