import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./componentes/Footer";
import HomePage from "./componentes/Home";
import RestaurantDetailsPage from "./componentes/Restaurant";
import ConfirmationPage from "./componentes/Confirmation";
import Header from "./componentes/Header";
import { CartProvider } from "./CartContext/cartContext"; // <- importa o provider

function App() {
  return (
    <CartProvider>
      {" "}
      {/* <- envolve tudo aqui */}
      <Router>
        <div>
          <Routes>
            <Route path="/detalhes/:id" element={<RestaurantDetailsPage />} />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <HomePage />
                </>
              }
            />
            <Route path="/confirmacao" element={<ConfirmationPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
