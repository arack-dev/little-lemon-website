import "./BookingForm.css"
import { useState } from "react";

function BookingForm() {
    // const [minDate, setMinDate] = useState('');
    // const [maxDate, setMaxDate] = useState('');
    const today = new Date().toISOString().split('T')[0];
    const maxDateValue = new Date();
    maxDateValue.setDate(maxDateValue.getDate() + 7);
    const maxDateFormatted = maxDateValue.toISOString().split('T')[0];




    const [data, setData] = useState(
        {
            date: "",
            time: "17:00",
            number_guess: 1,
            occasion: "birthday",
        }
    )

    function handleChange(e) {
        const { name, value } = e.target;

        // Konversi nilai number_guess menjadi tipe data number
        const parsedValue = name === 'number_guess' ? parseInt(value, 10) : value;

        setData(prevData => {
            return { ...prevData, [e.target.name]: e.target.value }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    name="date"
                    min={today}
                    max={maxDateFormatted}
                    value={data.date}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name="time" value={data.time}
                    onChange={handleChange}>

                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                </select>
            </div>
            <div>
                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    step="1"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    name="number_guess"
                    value={data.number_guess}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    name="occasion"
                    value={data.occasion}
                    onChange={handleChange} >
                    <option value='birthday'>Birthday</option>
                    <option value='anniversary'>Anniversary</option>
                </select>
            </div>
            <input type="submit" value="Make Your reservation"></input>
        </form>
    )
}

export default BookingForm