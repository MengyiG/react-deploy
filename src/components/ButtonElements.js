import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? "var(--background-color)" : "var(--primary-color)"};
  white-space: no-wrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "var(--primary-color)" : "var(--text-color)")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: ${({ dark }) =>
  dark
    ? "var(--background-color) 2px solid"
    : "var(--primary-color) 2px solid"};;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ dark }) =>
      dark ? "var(--primary-color)" : "var(--background-color)"};
    color: ${({ primary }) =>
      primary ? "var(--text-color)" : "var(--primary-color)"};
    border: ${({ dark }) =>
      dark
        ? "var(--background-color) 2px solid"
        : "var(--primary-color) 2px solid"};
  }
`;
