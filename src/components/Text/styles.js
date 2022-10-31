import styled from 'styled-components';

export const Container = styled.div`

  p, span {
    font-size: ${({ size, theme }) => theme.size[size]};
  }

`;
