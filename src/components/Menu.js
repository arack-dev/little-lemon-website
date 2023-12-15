import "./Menu.css"

function menu() {
    const data = [
        {
            id: 1,
            name: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            img: require("../assets/greek salad.jpg"),
        },
        {
            id: 2,
            name: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            img: require("../assets/bruchetta.jpg"),
        },
        {
            id: 3,
            name: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is a authentic as can be imagined.",
            img: require("../assets/lemon dessert.jpg"),
        },
    ]
    return (
        <section className="menu" id="menu">
            <section className="menu-header">
                <h3 className="attention">This weeks specials!</h3>
                <button className="cta">Online Menu</button>
            </section>
            <section className="menu-list">
                {data.map(menu => {
                    return <section key={menu.id} className="card">
                        <div className="card-image">
                            <img src={menu.img} alt={menu.name} />
                        </div>
                        <div className="card-text">
                            <div className="card-header">
                                <h4 className="menu-name">{menu.name}</h4>
                                <p className="menu-price">{menu.price}</p>
                            </div>
                            <p className="menu-description">
                                {menu.description}
                            </p>
                            <a href="#" className="order-link">Order a delivery</a>

                        </div>
                    </section>
                })}
            </section>
        </section>
    )
}

export default menu