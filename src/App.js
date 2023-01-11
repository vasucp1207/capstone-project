import Header from "./components/Header";
import Photos from "./pages/Photos";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
