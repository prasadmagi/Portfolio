import React from 'react'
import './Main.css'
export const Main = () => {
    return (
        <div className='main-section'>
            <div className='section'>
                <div className='section section-1'>
                    <div className='section-1-fields'>
                        <input placeholder='Enter Name' />
                        <input placeholder='Enter Password' />
                        <button>Submit</button>
                    </div>
                </div>
                <div className='section section-2'>
                    <div className='sectin-2-fields'>
                        <p>Login</p>
                        <p>Welcome User </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
