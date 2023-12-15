import MainApp from "../MainApp"
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Testimonials from '../components/Testimonials'
import About from '../components/About'


function HomePage() {
    return (
        <>
            <Hero />
            <Menu />
            <Testimonials />
            <About />
        </>
    )
}

export default HomePage