import React, { PureComponent } from 'react';
import './styles.css';
import H1 from 'components/H1';
import Container from 'components/Container';

class Header extends PureComponent {
  render() {
    return (
      <Container className="header">
        <H1>React Calculator App</H1>
      </Container>
    );
  }
}

export default Header;
