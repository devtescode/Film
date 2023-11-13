import React from 'react'
import "./Notfound.css"
import logo from '../assets/error.webp'
import { useNavigate } from 'react-router-dom'
const Notfound = () => {
    const navigate = useNavigate()
    const homeBtn=()=>{
        navigate("/home")
    }
    return (
        <>
            <div className='container shadow-lg border p-4'>
                <div className='mx-auto text-center'>
                    <img src={logo} className='styleerrimg' alt="" />
                    <p>This page isn't available click on the button below</p>
                    <button onClick={homeBtn} className='btn btn-info'>Home</button>
                </div>
            </div>
        </>

    )
}

export default Notfound