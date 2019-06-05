import React from 'react';
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to="/pageTwo">
                <h2>Go to Page 2</h2>
            </Link>
        </>
    )
}
