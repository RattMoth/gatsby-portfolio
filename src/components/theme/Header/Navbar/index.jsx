import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand, ThemeTogglerDiv } from './styles';
import ToggleTheme from '../ToggleTheme';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand
        as={Link}
        to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        theme={theme}
      >
        My Resume
      </Brand>
      <NavbarLinks desktop />
      <ThemeTogglerDiv>
        <ToggleTheme />
      </ThemeTogglerDiv>
    </Wrapper>
  );
};

export default Navbar;
