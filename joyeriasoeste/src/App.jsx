import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBAr } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

import "./App.css";

function App() {
  return (
    
  <BrowserRouter>
    < NavBAr />
    <Routes>
      <route path="/" element={<ItemListContainer />} />
      <route path="/Category/:id" element={<ItemListContainer />} />
      <route path="/Item/:id" element={<>🤖</>} />
    </Routes>
  </BrowserRouter>
  );

}


export default App;
