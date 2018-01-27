import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { onButtonPress } from '../actions';

import ButtonGroup from 'components/ButtonGroup';
import Row from 'components/Row';
import Column from 'components/Column';

class Keypad extends Component {
    onButtonClick = (item) => {
        this.props.onButtonClick(item);
    }

    render() {
        return (
            <Row>
                <Column>
                    <ButtonGroup
                        cols={3}
                        rows={1}
                        items={this.props.optionKeys}
                        sortItems={false}
                        buttonWidth={50}
                        buttonBackgroundColor="#e0e0e0"
                        onButtonClick={this.onButtonClick}
                    />
                    <ButtonGroup
                        cols={4}
                        rows={5}
                        items={this.props.numericKeys}
                        buttonWidth={50}
                        buttonBackgroundColor="#fdfafa"
                        onButtonClick={this.onButtonClick}
                    />
                </Column>
                <ButtonGroup
                    cols={1}
                    rows={5}
                    items={this.props.operationKeys}
                    buttonWidth={50}
                    buttonBackgroundColor="#ffccb3"
                    onButtonClick={this.onButtonClick}
                />
            </Row>
        );
    }
}

Keypad.propTypes = {
    onButtonClick: PropTypes.func,
    numericKeys: PropTypes.array.isRequired,
    operationKeys: PropTypes.array.isRequired,
    optionKeys: PropTypes.array.isRequired,
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onButtonClick: (key) => dispatch(onButtonPress(key)),
    };
};

export default connect(null, mapDispatchToProps)(Keypad);
