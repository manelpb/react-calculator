import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Display from 'components/Display';

class CalcDisplay extends Component {
    render() {
        return (
            <Display>
                {this.props.result}
            </Display>
        );
    }
}

CalcDisplay.propTypes = {
    result: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
    return {
        result: state.result,
    };
};

export default connect(mapStateToProps, null)(CalcDisplay);
