import React, { Component } from 'react';
import Hero from "../components/hero";
import Banner from "../components/banner";
import {Link} from 'react-router-dom';

export default class psychics extends Component {
    render() {
        return (
        <Hero hero="psychicHero">
            <Banner title="Our Psychics">
                <Link to="/" className='btn-primary'>
                    Return Home
                </Link>
            </Banner>
        </Hero>
        )
    }
}
