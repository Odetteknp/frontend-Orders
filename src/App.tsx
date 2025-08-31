// src/App.tsx
import './App.css';
import RestaurantMenu from './components/RestaurantMenu';
import CartPage from './pages/CartPage';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<RestaurantMenu />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
