import styled from 'styled-components';

const H1 = styled.button`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  background-color: ${props => props.backgroundColor || 'transparent'};
  text-align: center;
`;

export default H1;