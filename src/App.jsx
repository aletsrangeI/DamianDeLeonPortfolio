import { BrowserRouter, Routes, Route } from "react-router";
import { MainPage } from "./scenes/mainpage";
import { Shop } from "./scenes/shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
