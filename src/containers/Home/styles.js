import styled from "styled-components";

import Backgroud from "../../assets/background1.svg";

export const Container = styled.div`
  background: url("${Backgroud}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
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
