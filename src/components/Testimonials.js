import profile from "../assets/profile.png"
import "./Testimonials.css"

function Testimonials() {
    return (
        <section className="testimonials">

            <section className="testimonial-header">
                <h3 className="attention white">Testimonials</h3>
            </section>
            <div className="testimonial-lists">
                <div className="testimonial card">
                    <div className="testimonial-profile">
                        <div className="profile-image"><img src={profile} /></div>
                        <div className="profile-info">
                            <p className="profile-name">Jhontri Boyke</p>
                            <p className="rating">4.5/5.0</p>
                        </div>
                    </div>
                    <div className="review">
                        <p>Food here all awesome, the chefs and waitress are kind!</p>
                    </div>
                </div>
                <div className="testimonial card">
                    <div className="testimonial-profile">
                        <div className="profile-image"><img src={profile} /></div>
                        <div className="profile-info">
                            <p className="profile-name">Jhontri Boyke</p>
                            <p className="rating">4.5/5.0</p>
                        </div>
                    </div>
                    <div className="review">
                        <p>Food here all awesome, the chefs and waitress are kind!</p>
                    </div>
                </div><div className="testimonial card">
                    <div className="testimonial-profile">
                        <div className="profile-image"><img src={profile} /></div>
                        <div className="profile-info">
                            <p className="profile-name">Jhontri Boyke</p>
                            <p className="rating">4.5/5.0</p>
                        </div>
                    </div>
                    <div className="review">
                        <p>Food here all awesome, the chefs and waitress are kind!</p>
                    </div>
                </div><div className="testimonial card">
                    <div className="testimonial-profile">
                        <div className="profile-image"><img src={profile} /></div>
                        <div className="profile-info">
                            <p className="profile-name">Jhontri Boyke</p>
                            <p className="rating">4.5/5.0</p>
                        </div>
                    </div>
                    <div className="review">
                        <p>Food here all awesome, the chefs and waitress are kind!</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonials