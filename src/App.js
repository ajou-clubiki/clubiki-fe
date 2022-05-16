import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ClubikiMainPage from "./pages/ClubikiMainPage/ClubikiMainPage";
import "./general.css";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wiki" element={<ClubikiMainPage />} />
        <Route path="/join" element={<ClubikiMainPage />} />
      </Routes>
    </>
  );
}

export default App;
