import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Genres from './pages/Genres';
import Search from './pages/Search';
import Details from './pages/Details';
import Watchlist from './pages/Watchlist';
import Watch from './pages/Watch';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { WatchlistProvider } from './context/WatchlistContext';

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, [pathname, search]);
  return null;
}

function AppShell() {
  const location = useLocation();
  const isPlayer = location.pathname.startsWith('/watch/');
  return <><ScrollToTop/>{!isPlayer && <Navbar/>}<Routes><Route path="/" element={<Home/>}/><Route path="/movies" element={<Catalog kind="movies"/>}/><Route path="/series" element={<Catalog kind="series"/>}/><Route path="/genres" element={<Genres/>}/><Route path="/search" element={<Search/>}/><Route path="/title/:id" element={<Details/>}/><Route path="/watch/:id" element={<Watch/>}/><Route path="/watchlist" element={<Watchlist/>}/><Route path="/about" element={<About/>}/><Route path="*" element={<NotFound/>}/></Routes>{!isPlayer && <Footer/>}</>;
}

export default function App() {
  return <BrowserRouter><WatchlistProvider><AppShell/></WatchlistProvider></BrowserRouter>;
}
