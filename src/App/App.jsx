import { BrowserRouter, Outlet } from 'react-router-dom';
import { Header } from '../pages/Header/Header';
import { MainRoutes } from '../routes';

import './App.css'

export function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Outlet />
        <MainRoutes />
      </div>
    </BrowserRouter>
  )
}
