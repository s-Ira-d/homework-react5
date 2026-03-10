import PropTypes from "prop-types";
import { Card, Image, Content, Title, Text } from "./RecipeCard.styled";
import { Difficulty } from "../Difficulty/Difficulty";

export const RecipeCard = ({ recipe }) => {
  const { title, image, time, servings, calories, difficulty } = recipe;

  const diffMap = {
    Easy: 0,
    Medium: 1,
    Hard: 3,
  };

  return (
    <Card>
      <Image src={image} alt={title} />

      <Content>
        <Title>{title}</Title>

        <Text>Time: {time} min</Text>
        <Text>Servings: {servings}</Text>
        <Text>Calories: {calories}</Text>

        <Difficulty difficulty={diffMap[difficulty]} />
      </Content>
    </Card>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.string.isRequired,
  }).isRequired,
};
