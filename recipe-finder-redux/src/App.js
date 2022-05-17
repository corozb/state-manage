import SearchRecipes from "./components/SearchRecipes";
import FavoriteRecipeList from "./components/FavoriteRecipeList";
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchRecipes/>}/>
          <Route path="/favorites" element={<FavoriteRecipeList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
