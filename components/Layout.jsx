import Navbar from "./Navbar";
import PageFooter from "./PageFooter";
const Layout = ({children}) => {
    return(
        <>
            <Navbar/>
            <main style={{
                minHeight: '52vh'
            }}>
                {children}
            </main>
            <PageFooter/>
        </>
    )
};

export default Layout;
