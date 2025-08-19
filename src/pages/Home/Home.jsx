import React from 'react';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import SkillsSection from './SkillsSection';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <HeroSection/>
            <AboutMe/>
            <SkillsSection/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;