import React, { Component } from 'react';

/** components */
import Container from 'components/Container';
import Column from 'components/Column';

/** connected components */
import CalcDisplay from './CalcDisplay';
import Keypad from './Keypad';

class HomePage extends Component {
  createItems = () => {
    const length = 9;
    const digits = [...Array(length)].map((_, idx) => ({
      label: (length - idx),
    }));

    const items = [
      ...digits,
      {
        label: '.',
        sort: 1,
      },
      {
        label: 0,
        sort: 0,
        double: true,
      },
    ];

    return items;
  }

  createOptions = () => {
    const items = ['C', '+/-', '%'].map((op) => ({
      label: op,
      onClick: this.onClickButton,
    }));

    return items;
  }

  createOperators = () => {
    const items = ['/', '*', '-', '+', '='].map((op) => ({
      label: op,
      onClick: this.onClickButton,
    }));

    return items;
  }

  render() {
    return (
      <Container className="App" style={{ justifyContent: 'center', display: 'flex' }}>
        <Column style={{ width: 200 }}>
          <CalcDisplay />
          <Keypad
            numericKeys={this.createItems()}
            operationKeys={this.createOperators()}
            optionKeys={this.createOptions()}
          />
        </Column>
      </Container>
    );
  }
}

export default HomePage;
