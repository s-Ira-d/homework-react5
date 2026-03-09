import React from "react";
import Recipe from "./components/Recipe/Recipe.js";
import styled from "styled-components";
import recipes from "./data/recipes";

const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
`;

const Title = styled.h1`
  color: #333;
`;

function App() {
  return (
    <Wrapper>
      <Title>Список рецептів</Title>
      {recipes.map((r, idx) => (
        <Recipe key={idx} {...r} />
      ))}
    </Wrapper>
  );
}

export default App;
