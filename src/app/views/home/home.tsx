import * as React from 'react';
import {ContentLayout} from "@components/layouts/content-layout";
import './home.css';

const Home = () => {
    return(
        <ContentLayout title={"Freezlex's homepage"}>
            <div className="home-hero">
                <div className="hero-loc-badge">
                    <span className="ping-dot"></span>
                    <p>Tinkering in Alsace</p>
                </div>
                <div className="hero-main">
                    <h1>Exploring the weird corners of code.</h1>
                    <p>Hey, I&apos;m <span>Freezlex</span>. This is where I dump my coding experiments, half-baked ideas and things I learned while breaking stuff. Nothing too serious.</p>
                </div>
                <div className="hero-action">
                    <button>See Expermients</button>
                    <button>More ...</button>
                </div>
            </div>
            <div className="home-tstack">
            </div>
        </ContentLayout>
    )
}

export default Home;