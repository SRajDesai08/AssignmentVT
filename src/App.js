import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ListOfProducts from "./Screens/ListOfProducts/ListOfProducts";
import Details from "./Screens/DetailsOfProducts/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListOfProducts />}></Route>
        <Route exact path="/ProductDetails/:id" element={<Details />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
