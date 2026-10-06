import * as React from 'react';
import {ContentLayout} from "@components/layouts/content-layout";
import {HomeHero} from "@features/home/component/home-hero";
import {AboutSection} from "@features/home/component/about-section";
import {StatsSection} from "@features/home/component/stats-section";
import {ExperimentsSection} from "@features/home/component/experiments-section";
import {ContactSection} from "@features/home/component/contact-section";

const Home = () => {
    return(
        <ContentLayout
            title={"Freezlex · Home"}
            description={"Freezlex's corner of the web: coding experiments, half-baked ideas and things learned while breaking stuff."}
            hero={<HomeHero/>}
            footer={<ContactSection/>}
        >
            <AboutSection/>
            <StatsSection/>
            <ExperimentsSection/>
        </ContentLayout>
    )
}

export default Home;
