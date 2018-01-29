import styled from 'styled-components';

const H1 = styled.button`
  width: ${props => `${props.width || 10}px`};
  height: ${props => `${props.height || 10}px`};
  background-color: ${props => props.backgroundColor || 'transparent'};
  text-align: center;

  &:disabled {
    opacity: 0.5;
  }
`;

export default H1;