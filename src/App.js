import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/meals/Meals";
import CartContexProvider from "./store/cart-contex";
import ModalContex from "./store/modalContex";

function App() {
  const [showModal, setShowModal] = useState(null);

  const hideModalHandler = (e) => {
    setShowModal(null);
  };
  const showModalHandler = (e) => {
    setShowModal(true);
  };
  return (
    <CartContexProvider>
      <ModalContex.Provider
        value={{ onClose: hideModalHandler, onShow: showModalHandler }}
      >
        {showModal && <Cart />}
        <Header />
        <main>
          <Meals />
        </main>
      </ModalContex.Provider>
    </CartContexProvider>
  );
}

export default App;
