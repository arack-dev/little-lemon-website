import hero_image from "../assets/restauranfood.jpg"
import "./Hero.css"

function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h2 className="title yellow">Little Lemon<br /><span className="subtitle white">Chicago</span></h2>
                <p className="description white">We are a family owned Mediterranean restaurant focused on
                    traditional recipes served with a modern twist
                </p>
                <button role="reserve-button" className="cta">Reserve a table</button>
            </div>
            <div className="hero-image">
                <img src={hero_image} />
            </div>
        </section>
    )
}

export default Hero