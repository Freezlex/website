import React from "react";
import './projects-hero.component.css'
import {Link} from "react-router";

export default function ProjectsHeroComponent() {
    return <div className='projects-hero'>
        <div className='hero-top'>
            <h1>All my <a className='primary'>Projects</a>.</h1>
        </div>
        <div className='hero-middle'>
            <p>I’m a full-stack student developer but also your average open-source contributor.</p>
            <p className={'silent'}>And sometimes I’m also streaming on Twitch</p>
        </div>
        <div className='hero-bottom'>
            <Link to="/#grid-more">
                <button className='primary'>Learn more</button>
            </Link>
            <Link to="/about">
                <button className='secondary'>About me</button>
            </Link>
        </div>
    </div>
}
