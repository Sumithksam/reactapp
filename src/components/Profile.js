import React, { useState } from 'react'

const Profile = () => {
    var [name,setName]=useState("SUMITH")
    const changeName=()=>{
        setName(
            name="VANI"
        )
    }
  return (
    <div>logged in as {name}
    <button onClick={changeName} className='btn btn-success'>LOGIN</button>
    </div>
  )
}

export default Profile