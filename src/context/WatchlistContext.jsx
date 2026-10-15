import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const WatchlistContext = createContext(null);
const STORAGE_KEY = 'cinewave-watchlist-v1';

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist)); } catch { /* storage may be unavailable */ }
  }, [watchlist]);

  const isSaved = useCallback((id) => watchlist.includes(id), [watchlist]);
  const toggleSaved = useCallback((id) => {
    setWatchlist((current) => current.includes(id) ? current.filter((savedId) => savedId !== id) : [id, ...current]);
  }, []);
  const value = useMemo(() => ({ watchlist, isSaved, toggleSaved }), [watchlist, isSaved, toggleSaved]);
  return <WatchlistContext.Provider value={value}>{children}</WatchlistContext.Provider>;
}

export function useWatchlist() {
  const context = useContext(WatchlistContext);
  if (!context) throw new Error('useWatchlist must be used inside WatchlistProvider');
  return context;
}
