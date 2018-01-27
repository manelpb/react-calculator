import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import Button from 'components/Button';

class ButtonGroup extends PureComponent {
  /**
   * sort columns
   */
  sortColumns = (columns) => columns.sort((a, b) => {
    if (a.sort && a.sort < b.sort) {
      return -1;
    }
    else if (a.sort && a.sort > b.sort) {
      return 1;
    }
    else if (a.label < b.label) {
      return -1;
    }
    else if (a.label > b.label) {
      return 1;
    } else {
      return 0;
    }
  });

  /**
   * get columns from x to y
   */
  getColumns = (start, end) => {
    const columns = this.props.items.slice(start, start + end);
    return (this.props.sortItems) ? this.sortColumns(columns) : columns;
  }

  render() {
    const numColumns = this.props.rows > 1 && this.props.cols > 1 ? this.props.cols - 1 : this.props.cols;
    const containerWidth = (this.props.buttonWidth * numColumns);

    return (
      <Container width={`${this.props.width || containerWidth}px`}>
        {[...Array(this.props.rows)].map((_, idx) => {
          const start = (idx * numColumns);
          const columns = this.getColumns(start,  numColumns);

          return (
            columns.map((item, idx) => (
              <Button
                key={idx}
                width={(item.double) ? this.props.buttonWidth * 2: this.props.buttonWidth}
                height={this.props.buttonWidth}
                backgroundColor={this.props.buttonBackgroundColor}
                onClick={() => {
                  this.props.onButtonClick(item);
                }}
              >
                {item.label}
              </Button>
            ))
          );
        })}
      </Container>
    );
  }
}

ButtonGroup.propTypes = {
  /**
   * Number of columns
   */
  cols: PropTypes.number,

  /**
   * Number of rows
   */
  rows: PropTypes.number,

  /**
   * Container width (optional)
   */
  width: PropTypes.number,

  /**
   * Event on button click
   */
  onButtonClick: PropTypes.func,

  /**
   * Button background color
   */
  buttonBackgroundColor: PropTypes.string,

  /**
   * Button width
   */
  buttonWidth: PropTypes.number,

  /**
   * Array of button itens
   */
  items: PropTypes.array,

  /**
   * Sort button items before rendering
   */
  sortItems: PropTypes.bool,
};

ButtonGroup.defaultProps = {
  items: [],
  sortItems: true,
  buttonWidth: 50,
};

export default ButtonGroup;
