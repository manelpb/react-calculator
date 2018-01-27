import styled from 'styled-components';

const H1 = styled.button`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  background-color: ${props => props.backgroundColor || 'transparent'};
  text-align: center;

  &:disabled {
    opacity: 0.5;
  }
`;

export default H1;