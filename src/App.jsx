import { BrowserRouter, Routes, Route } from "react-router";
import { MainPage } from "./scenes/mainpage";
import { Gallery } from "./scenes/components/Gallery";
import { Footer, Header } from "./scenes/mainpage/components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery/:id" element={<Gallery />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
