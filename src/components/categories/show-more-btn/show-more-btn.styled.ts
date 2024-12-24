import styled from "@emotion/styled"

export const ShowMoreBtn = styled.button`
width: 100%;
  height: 50px;
  background: #18396c;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #f39a46;
  font-family: var(--font-family);
  font-style: italic;
  font-weight: 100;
  font-size: 20px;
  color: #fff;
  &:hover {
    background: #2E5A99;
    transition: 0.5s;
  }

  @media screen and (max-width: 800px) {
  width: 80%;
  font-size: 14px;
}
`;



