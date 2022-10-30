import styled from "styled-components";

export const Container = styled.div`

  p, span {
    font-size: ${({ setFontSize, theme }) => theme.size[setFontSize]};
  }


`;