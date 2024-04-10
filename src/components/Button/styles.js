import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;

  border-radius: 14px;
  background: ${(props) => (props.isBack ? "transparent" : "#000000cc")};

  border: ${(props) => (props.isBack ? "1px solid #ffffff" : "none")};
  font-size: 17px;
  font-weight: 700;
  line-height: 28px;
  color: #ffffff;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${(props) => props.isBack && "rotateY(180deg)"};
  }
`;
