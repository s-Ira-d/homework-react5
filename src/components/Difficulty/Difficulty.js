import styled, { css } from "styled-components";

const difficultyStyles = {
  0: css`
    background-color: #a0e7a0;
    color: #034003;
  `,
  1: css`
    background-color: #ffe29f;
    color: #664400;
  `,
  3: css`
    background-color: #ff8a8a;
    color: #800000;
    font-weight: bold;
    border: 2px solid #ff0000;
  `,
};

const Difficulty = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 0.9rem;
  ${(props) => difficultyStyles[props.level || 0]}
`;

export default Difficulty;
