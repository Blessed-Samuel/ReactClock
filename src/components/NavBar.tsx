import React from 'react'
// import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <nav>
                <div className=''>
                    <div>
                        <Link to="/" className='flex items-center space-x-2'>
                            <img src='' alt='Brand-Logo' className='w-auto h-8'></img>
                            <span>Logo-Here</span>
                        </Link>
                    </div>

                    <div></div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;
