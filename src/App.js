import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ClubikiMainPage from "./pages/ClubikiMainPage/ClubikiMainPage";
import CreateMainBoardPage from "./pages/CreateMainBoardPage/CreateMainBoardPage";
import CreateSubBoardPage from "./pages/CreateSubBoardPage/CreateSubBoardPage";
import ClubMemberListPage from "./pages/ClubMemberListPage/ClubMemberListPage";
import ConfigSubBoardPage from "./pages/ConfigSubBoardPage/ConfigSubBoardPage";

import "./general.css";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wiki" element={<ClubikiMainPage />} />
        <Route path="wiki/create-board" element={<CreateMainBoardPage />} />
        <Route path="wiki/create-subboard" element={<CreateSubBoardPage />} />
        <Route path="wiki/config-subboard" element={<ConfigSubBoardPage />} />
        <Route path="/join" element={<ClubikiMainPage />} />
        <Route path="/members" element={<ClubMemberListPage />} />
      </Routes>
    </>
  );
}

export default App;
