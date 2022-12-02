import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddForm from "./AddForm";
import Profiles from "./Profiles";
import User from "./User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Profiles />} />
        <Route path="/:id" element={<User />} />
        <Route path="/add" element={<AddForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
