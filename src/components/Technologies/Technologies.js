import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaFigma } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Front-end and back-end development are my areas of expertise, giving me an in-depth understanding of the entire web development process. From responsive design and user interface development with HTML, CSS, and JavaScript to server-side scripting with technologies such as Node.js and Express.js, I am skilled in handling a variety of projects.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="4rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br />React.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="4rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with <br />Node.js and Databases</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaFigma size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with <br />Figma</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
