import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profiles from "./Profiles";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Profiles />} />
        <Route path="/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
