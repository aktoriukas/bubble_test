import React, {useState} from 'react'
import Card from './Card'
import Booking from './Booking'
import SearchResult from './SearchResult'

import {api_getLocalSitters} from '../api_calls'

export default function Profile({user, bookings, token}) {

    const [search, setSearch] = useState(false)

    const getSearchResults = async () => {

        const searchData = await api_getLocalSitters(token)
        setSearch(searchData)
    }

    return (
        <div className='row'>

            <div className='col-12 col-lg-5'>

                <h2 className='section-title'>Profile</h2>

                <Card user={user} />

            </div>

            <div className='col-12 col-lg-5'>

                <h2 className='section-title'>Your bookings:</h2>

                {bookings ? 
                    bookings.confirmedBookings.map(booking => (

                        <Booking key={booking.id} booking={booking} />
                    ))
                :
                'no bookings'
                }

                {search ? 
                <>
                <h2 className='section-title'>Local sitters:</h2>

                    {search.map(result => (
                        <SearchResult key={result.id} result={result} />

                    ))}
                </>
                :
                <div className='btn-container'>
                    <button 
                        onClick={getSearchResults} 
                        className='custom-btn'>
                            show local sitters
                    </button>
                </div>
                }

            </div>
        </div>
    )
}
