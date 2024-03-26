import './App.css'

import router from './router/router';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom'

import About from './pages/about/About';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import Navigation from './pages/navigation/Navigation';
import Status from './pages/status/Status';
import Cart from './pages/cart/Cart';

function App() {

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App