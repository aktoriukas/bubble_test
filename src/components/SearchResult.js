import React from 'react'
import img_user from '../assets/profile_default.png'
import Languages from './Languages'

export default function SearchResult({result}) {
    return (
        <figure className="custom-card sideways search-result">
            <div className="profile-image"><img src={img_user} alt="sample47" /></div>
            <figcaption>
                <h3>{result.fullName}</h3>
                <p className='bio'>{result.biography}</p>

                <div className='details'>
                    <p>£{result.hourlyRate}/h</p>
                    <p>distance: {result.distanceInKm} km</p>
                </div>

                <div className='languages'>
                    <Languages lang={result.otherLanguagesSpoken.value} />
                </div>
            </figcaption>
        </figure>

    )
}
