import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./Main";

function MainApp({ children }) {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default MainApp