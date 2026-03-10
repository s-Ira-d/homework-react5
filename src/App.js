import recipes from "./data/recipes.json";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { GlobalStyle, Wrapper } from "./App.styled";

function App() {
  return (
    <>
      <GlobalStyle />

      <Wrapper>
        {recipes.map((item) => (
          <RecipeCard key={item.id} recipe={item} />
        ))}
      </Wrapper>
    </>
  );
}

export default App;
