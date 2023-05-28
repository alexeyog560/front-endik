import "./App.css";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import RecipePage from "./components/RecipePage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
