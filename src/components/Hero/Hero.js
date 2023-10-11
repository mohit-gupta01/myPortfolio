import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Portfolio
      </SectionTitle>
      <SectionText>
        I&apos;m a FullStack Web Developer.
      </SectionText>
      <Button onClick={()=>{window.location="https://drive.google.com/drive/folders/1ja0C0wojAyKIATsSfndIvlCRrDEziy84"}}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;