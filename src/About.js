import React from 'react';
import Bio from './Bio';
import Skills from './Skills';
import Stack from './Stack';
import Interests from './Interests';

const About = () => {
    return (
        <div>
            <h2>About Me</h2>
            <Bio />
            <Skills />
            <Stack />
            <Interests />
        </div>
    )
};

export default About;