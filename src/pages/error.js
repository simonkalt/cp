import React from 'react'

import img_error from '../images/error.jpg';
import Hero from "../components/hero";
import Banner from '../components/banner';
import {Link} from 'react-router-dom';

export default function error() {
    return <Hero>
        <Banner title='404' subtitle='Page not foundski'>
            <Link to='/' className='btn-primary'>
                Return Home
            </Link>
        </Banner>
    </Hero>
}
