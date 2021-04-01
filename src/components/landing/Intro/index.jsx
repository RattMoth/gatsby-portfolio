import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import Fade from 'react-reveal/Fade';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <Fade bottom duration={1000} delay={500}>
            <h1>Hi There!</h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000}>
            <h4>My name is Matt Roth. I'm a Full Stack Web Developer.</h4>
          </Fade>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Hey I'm Matt!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
