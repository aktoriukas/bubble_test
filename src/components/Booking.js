import React, {useState} from 'react'
import img_user from '../assets/profile_default.png'
import { api_getBooking } from '../api_calls'

export default function Booking({booking, token}) {

    const [expanded, setExpanded] = useState(false)
    const [fullBooking, setFullBooking] = useState({})

    const handleClick = async () => {

        const fullBooking = await api_getBooking(token, booking.id)
        console.log(fullBooking)
        setFullBooking(fullBooking)
        setExpanded(true)
    }

    return (
        <>
            <figure className="custom-card sideways">
                <div className="profile-image"><img src={img_user} alt="sample47" /></div>
                <figcaption>
                    <h3>{booking.otherUserFullName}</h3>
                    <div className='details'>
                        <p>Duration: {booking.scheduledDuration}</p>
                        <p>Scheduled Date: {booking.scheduledStart}</p>
                    </div>
                    <button onClick={handleClick} className='custom-btn'>more details</button>
                </figcaption>
            </figure>

            {expanded ?

            <div className='full-booking'>

                <figure className="custom-card">

                    <div className="profile-image"><img src={img_user} alt="sample47" /></div>

                    <figcaption>
                        <h3>{booking.otherUserFullName}</h3>

                        <div className='details'>

                            <p>Duration: {fullBooking.scheduledDuration}h</p>
                            <p>Scheduled Date: {fullBooking.scheduledDateTime}</p>
                            <p>Last updated: {fullBooking.updated}</p>
                        </div>

                        <button onClick={() => setExpanded(false)} className='custom-btn x'>close</button>
                    </figcaption>
                </figure>
            </div>
            :
            ''
            }
        </>
    )
}
