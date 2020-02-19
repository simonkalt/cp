import React from 'react'
import Hero from "../components/hero";
import Banner from "../components/banner";
import {Link} from 'react-router-dom';
import Services from '../components/services';
import FeaturedPsychics from "../components/featuredPsychics";

export default function home() {
    return (
    <>
    <Hero hero="defaultHero">
        <Banner title="Answers at your reach" subtitle="MAKE THE CONNECTION">
            <Link to="/psychics" className="btn-primary">
                Our Psychics
            </Link>
        </Banner>
    </Hero>
    <Services/>
    <FeaturedPsychics/>
    </>
    )
}

Hero.defaultProps = {
    hero: "defaultHero"
}