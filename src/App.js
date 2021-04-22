import React, {useState, useEffect} from 'react';
import Login from './components/Login'
import {api_getUser,api_getBookings} from './api_calls'
import Profile from './components/Profile'

import './css/index.css'
export default function App() {

  const [token, setToken] = useState('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVmNDRkM2ZmMzM2ZjE4MDc2NGYxMjY1ZiIsInR5cGUiOiJtb2JpbGUiLCJpYXQiOjE1OTk2NDg4ODksImV4cCI6MTY0Mzg4NTY4OX0.W4P1OsLIrqzA8-XILGBBrRl1iQYLy3NZSZBZus_zfbQ')
  const [user, setUser] = useState(false)
  const [bookings, setbookings] = useState(false)

  useEffect(() => {
    
    if(token){
      getdata()
    }
  }, [token])

  const getdata = async () => {

    const usr = await api_getUser(token)
    const bookngs = await api_getBookings(token)
    setUser(usr)
    setbookings(bookngs)
  }

  return (
    <div className="App">

      <div className='container-lg'>
        {user ? 
        <Profile 
          user={user} 
          bookings={bookings} 
          token={token} />
        : 
        <Login 
          setToken={setToken} />
        }
      </div>
    </div>
  );
}