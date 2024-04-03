import styled from "styled-components";
import Background from "./assets/background1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItems = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;

  padding: 50px 36px;

  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const H1 = styled.h1`
  color: #ffffff;
  font-size: 34px;
  font-weight: 700;
  line-height: 40px;
  text-align: center;
  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
  text-align: left;
  color: #eeeeee;
  margin-left: 25px;
`;

export const Input = styled.input`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  border: none;
  outline: none;
  padding-left: 25px;
  margin-bottom: 34px;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;

  border-radius: 14px;
  background: #000000cc;
  border: none;
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

    &:active {
      opacity: 0.5;
    }
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  width: 342px;
  height: 58px;
  border: none;
  outline: none;

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
