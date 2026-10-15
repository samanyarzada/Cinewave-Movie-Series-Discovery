import { ArrowRight, Bookmark, Clapperboard, Compass, Heart, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import SectionHeading from '../components/SectionHeading';
import { titles } from '../data/titles';
import { useWatchlist } from '../context/WatchlistContext';

export default function Watchlist() {
  const { watchlist, toggleSaved } = useWatchlist();
  const savedItems = watchlist.map((id) => titles.find((item) => item.id === id)).filter(Boolean);
  return <main className="watchlist-page page-shell"><div className="watchlist-intro"><div><div className="eyebrow"><span className="eyebrow-line"/>YOUR PERSONAL COLLECTION</div><h1>Keep the stories<br/><span>close.</span></h1><p>The titles you’ve saved for later, all in one thoughtful little corner.</p></div><div className="watchlist-count-orb"><Bookmark size={23}/><strong>{savedItems.length.toString().padStart(2, '0')}</strong><span>SAVED TITLES</span></div></div>
    {savedItems.length > 0 ? <><div className="watchlist-toolbar"><span>{savedItems.length} {savedItems.length === 1 ? 'story' : 'stories'} on your list</span><button type="button" className="clear-watchlist" onClick={() => { if (window.confirm('Remove all titles from your watchlist?')) savedItems.forEach((item) => toggleSaved(item.id)); }}><Trash2 size={14}/> Clear list</button></div><div className="movie-grid">{savedItems.map((item, index) => <MovieCard key={item.id} item={item} index={index}/>)}</div><div className="watchlist-note"><Heart size={15}/> A good story is worth saving for the right moment.</div></> : <div className="watchlist-empty"><span className="watchlist-empty-icon"><Bookmark size={28}/><Plus size={15}/></span><span className="eyebrow">YOUR LIST IS A BLANK CANVAS</span><h2>Nothing saved.<br/><span>Yet.</span></h2><p>When a title catches your eye, hit the plus button. We’ll keep it here for your next movie night.</p><div className="watchlist-empty-actions"><Link to="/movies" className="button-primary"><Compass size={16}/> Explore movies <ArrowRight size={15}/></Link><Link to="/series" className="button-secondary">Browse series</Link></div></div>}
    <section className="content-section watchlist-discover"><SectionHeading eyebrow="A PLACE TO START" title="A few stories to add to your list." description="Not sure what to save first? Start with these viewer favourites." to="/movies"/><div className="movie-grid">{titles.filter((item) => item.trending && !watchlist.includes(item.id)).slice(0, 4).map((item, index) => <MovieCard key={item.id} item={item} index={index}/>)}</div></section>
  </main>;
}
