import React from 'react'
import img_user from '../assets/profile_default.png'

export default function Booking({booking}) {
    return (
        <figure className="custom-card sideways">
            <div className="profile-image"><img src={img_user} alt="sample47" /></div>
            <figcaption>
                <h3>{booking.otherUserFullName}</h3>
                <div className='details'>
                    <p>Duration: {booking.scheduledDuration}</p>
                    <p>Starting time: {booking.scheduledStart}</p>
                </div>
                <button className='custom-btn'>See more</button>
            </figcaption>
        </figure>

    )
}
