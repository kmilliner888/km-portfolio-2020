import React from 'react';
import Bio from './Bio';
import Skills from './Skills';
import Stack from './Stack';

const About = () => {
    return (
        <div>
            <h2>About Me</h2>
            <Bio />
            <Skills />
            <Stack />
        </div>
    )
};

export default About;