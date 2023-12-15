import BookingForm from "../components/BookingForm"

function BookingPages() {
    return (
        <section className="reservation" style={{ paddingBlock: "2rem" }}>
            <h1 style={{ fontSize: "48px", textAlign: "center" }}>Reserve a table</h1>
            <BookingForm />
        </section>
    )
}

export default BookingPages