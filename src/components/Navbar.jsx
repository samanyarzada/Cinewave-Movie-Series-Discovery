import { useEffect, useRef, useState } from 'react';
import { Bookmark, ChevronDown, Clapperboard, Menu, Search, X } from 'lucide-react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Brand from './Brand';
import { useWatchlist } from '../context/WatchlistContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { watchlist } = useWatchlist();

  useEffect(() => { setMenuOpen(false); setSearchOpen(false); }, [location.pathname, location.search]);
  useEffect(() => { if (searchOpen) searchRef.current?.focus(); }, [searchOpen]);
  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') { setSearchOpen(false); setMenuOpen(false); } };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const submitSearch = (event) => {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
  };
  const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <Brand onClick={() => setMenuOpen(false)} />
          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <NavLink to="/" end className={navClass}>Home</NavLink>
            <NavLink to="/movies" className={navClass}>Movies</NavLink>
            <NavLink to="/series" className={navClass}>TV Series</NavLink>
            <NavLink to="/genres" className={navClass}>Genres <ChevronDown size={14} /></NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <div className="mobile-nav-extra">
              <NavLink to="/watchlist" className={navClass}><Bookmark size={16} /> My Watchlist <span className="nav-count">{watchlist.length}</span></NavLink>
            </div>
          </nav>
          <div className="nav-actions">
            <button className="icon-button" type="button" aria-label="Search titles" onClick={() => setSearchOpen(true)}><Search size={19} /></button>
            <Link to="/watchlist" className="watchlist-nav" aria-label={`Watchlist, ${watchlist.length} saved titles`}>
              <Bookmark size={17} /><span>My List</span>{watchlist.length > 0 && <span className="nav-count">{watchlist.length}</span>}
            </Link>
            <Link to="/movies" className="nav-cta"><Clapperboard size={15} /> Explore</Link>
            <button className="icon-button menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
          </div>
        </div>
      </header>
      {searchOpen && (
        <div className="search-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSearchOpen(false); }}>
          <form className="search-dialog" onSubmit={submitSearch} role="search" aria-label="Search Cinewave">
            <div className="search-dialog-top"><span>DISCOVER SOMETHING GREAT</span><button type="button" className="icon-button" aria-label="Close search" onClick={() => setSearchOpen(false)}><X size={20} /></button></div>
            <div className="search-input-wrap"><Search size={21} /><input ref={searchRef} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search movies, series, genres..." aria-label="Search titles"/><kbd>↵</kbd></div>
            <p className="search-hint">Try “Interstellar”, “drama”, or “2024”</p>
            <button className="search-submit" type="submit">Search catalogue <span>→</span></button>
          </form>
        </div>
      )}
    </>
  );
}
