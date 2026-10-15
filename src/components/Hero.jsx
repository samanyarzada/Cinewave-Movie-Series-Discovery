import { ArrowRight, Bookmark, Check, Play, Plus, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';

export default function Hero({ item }) {
  const { isSaved, toggleSaved } = useWatchlist();
  const saved = isSaved(item.id);
  return (
    <section className="hero-section" aria-label="Featured title">
      <div className="hero-backdrop" style={{ backgroundImage: `url("${item.backdrop}"), url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=85")` }} />
      <div className="hero-grain" />
      <div className="hero-content page-shell">
        <div className="hero-copy">
          <div className="hero-badges"><span className="hero-label"><Sparkles size={12} /> CINEWAVE ORIGINAL PICK</span><span className="hero-season">FEATURED FILM <span> / </span> {item.year}</span></div>
          <h1>{item.title.split(':')[0]}{item.title.includes(':') && <><span className="hero-title-colon">:</span><br /><span className="hero-title-secondary">{item.title.split(':').slice(1).join(':').trim()}</span></>}</h1>
          <p className="hero-description">{item.description}</p>
          <div className="hero-meta"><span className="hero-rating"><Star size={14} fill="currentColor" /> {item.rating.toFixed(1)} <span className="rating-out-of">/ 10</span></span><span className="hero-meta-divider"/><span>{item.year}</span><span className="hero-meta-divider"/><span>{item.duration}</span><span className="hero-meta-divider"/><span className="maturity-tag">{item.maturity}</span></div>
          <div className="hero-genres">{item.genres.map((genre) => <span key={genre}>{genre}</span>)}</div>
          <div className="hero-actions"><Link to={`/watch/${item.id}`} className="button-primary"><Play size={17} fill="currentColor" /> Watch preview <ArrowRight size={15}/></Link><Link to={`/title/${item.id}`} className="button-secondary">Explore title</Link><button className={`hero-save ${saved ? 'saved' : ''}`} type="button" onClick={() => toggleSaved(item.id)} aria-label={saved ? 'Remove from watchlist' : 'Add to watchlist'}>{saved ? <Check size={18}/> : <Plus size={19}/>}<span>{saved ? 'In my list' : 'My list'}</span></button></div>
          <div className="hero-footnote"><Bookmark size={12}/> Curated for curious viewers <span>·</span> Available in this demo</div>
        </div>
        <div className="hero-side-note"><span className="hero-side-line"/><span>THE ART OF<br/>GOOD STORIES</span><span className="hero-side-number">01 — 04</span></div>
      </div>
      <div className="hero-bottom page-shell"><div className="hero-scroll"><span className="scroll-line"/>SCROLL TO DISCOVER</div><div className="hero-index"><span className="hero-index-active">01</span><span/>02<span/>03<span/>04</div></div>
    </section>
  );
}
