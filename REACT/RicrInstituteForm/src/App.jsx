import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
