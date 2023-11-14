import React from 'react'
import logo from '../assets/error.webp'
import { useNavigate } from 'react-router-dom'
import "./Notfound.css"
const Notfound = () => {
    const navigate = useNavigate()
    const homeBtn = () => {
        navigate("/home")
    }
    return (
        <>
            <div className='smallscreen'>
                <div className='mx-auto text-center'>
                    <img src={logo} className='styleerrimg' alt="" />
                    <p>This page isn't available click on the button below</p>
                </div>
                <div className='justify-content-center arrowdivstyle p-3'>
                    <div className='contdiv d-flex'>
                        <h2>Home</h2>
                    </div>
                    <div className='mt-2'>
                        <button onClick={homeBtn} className='btn btn-info fw-bold'>Home</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Notfound