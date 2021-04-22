import React from 'react'
import img_user from '../assets/profile_default.png'
import img_girl from '../assets/girl.png'
import img_boy from '../assets/boy.png'

export default function Card({user}) {
    return (
        
        <figure className="custom-card sticky">
            <div className="profile-image"><img src={img_user} alt="sample47" /></div>
            <figcaption>
                <h3>{user.fullName}</h3>
                <h4>{user.biography}</h4>
                <div className='kids'>
                    {user.children.map((child, index)=> {
                        if(child.gender === 0) return <img src={img_girl} key={index} />
                        if(child.gender === 1) return <img src={img_boy} key={index} />       
                })}
                </div>
                <div className='details'>
                    <p>{user.mobileNumber}</p>
                    <p>{user.email}</p>
                </div>
            </figcaption>
        </figure>
    )
}
