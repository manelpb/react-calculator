import React, { Component } from 'react';
import Container from 'components/Container';
import ButtonGroup from 'components/ButtonGroup';
import Row from 'components/Row';
import Column from 'components/Column';
import Display from 'components/Display';

class HomePage extends Component {
  onClickButton = () => {

  }

  createItems = () => {
    const length = 9;
    const digits = [...Array(length)].map((_, idx) => ({
      label: (length - idx).toString(),
      onClick: () => this.onClickButton(idx),
    }));

    const items = [
      ...digits,
      {
        label: '.',
        onClick: () => {},
        sort: 1,
      },
      {
        label: '0',
        onClick: () => {},
        sort: 0,
        double: true,
      },
    ];

    return items;
  }

  createOptions = () => {
    const items = ['C', '+/-', '%'].map((op) => ({
      label: op,
      onClick: () => {}
    }));

    return items;
  }

  createOperators = () => {
    const items = ['/', '*', '-', '+', '='].map((op) => ({
      label: op,
      onClick: () => {}
    }));

    return items;
  }

  render() {
    return (
      <Container className="App" style={{ justifyContent: 'center', display: 'flex' }}>
        <Column style={{ width: 200 }}>
          <Display>11122</Display>
          <Row>
            <Column>
              <ButtonGroup
                cols={3}
                rows={1}
                items={this.createOptions()}
                buttonWidth={50}
                buttonBackgroundColor="#e0e0e0"
              />
              <ButtonGroup
                cols={4}
                rows={5}
                items={this.createItems()}
                buttonWidth={50}
                buttonBackgroundColor="#fdfafa"
              />
            </Column>
            <ButtonGroup
              cols={1}
              rows={5}
              items={this.createOperators()}
              buttonWidth={50}
              buttonBackgroundColor="#ffccb3"
            />
          </Row>
        </Column>
      </Container>
    );
  }
}

export default HomePage;
