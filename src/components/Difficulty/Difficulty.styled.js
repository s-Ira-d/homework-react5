import styled from "styled-components";

export const DiffText = styled.p`
  margin-top: 8px;
  font-weight: bold;

  color: ${(props) => {
    if (props.level === 3) return "red";
    if (props.level === 1) return "orange";
    return "green";
  }};

  font-size: ${(props) => (props.level === 3 ? "16px" : "14px")};
`;
