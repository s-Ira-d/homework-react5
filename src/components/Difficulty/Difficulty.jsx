import PropTypes from "prop-types";
import { DiffText } from "./Difficulty.styled";

export const Difficulty = ({ difficulty }) => {
  let text = "";

  if (difficulty === 0) text = "Easy";
  if (difficulty === 1) text = "Medium";
  if (difficulty === 3) text = "Hard";

  return <DiffText level={difficulty}>Difficulty: {text}</DiffText>;
};

Difficulty.propTypes = {
  difficulty: PropTypes.oneOf([0, 1, 3]).isRequired,
};
