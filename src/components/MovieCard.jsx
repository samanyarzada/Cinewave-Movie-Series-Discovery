import { Check, Play, Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWatchlist } from '../context/WatchlistContext';

export default function MovieCard({ item, index = 0, compact = false, showRank = false }) {
  const { isSaved, toggleSaved } = useWatchlist();
  const saved = isSaved(item.id);
  return (
    <article className={`movie-card ${compact ? 'movie-card-compact' : ''}`} style={{ '--card-delay': `${Math.min(index, 10) * 45}ms` }}>
      <div className="poster-wrap">
        <Link to={`/title/${item.id}`} className="poster-link" aria-label={`View ${item.title}`}>
          <img className="poster-image" src={item.poster} alt={`${item.title} poster`} loading={index > 5 ? 'lazy' : 'eager'} onError={(event) => { event.currentTarget.style.opacity = '0'; event.currentTarget.parentElement.classList.add('image-failed'); }} />
          <span className="poster-fallback" aria-hidden="true">{item.title}</span>
          <span className="poster-vignette" />
          <span className="poster-hover-play"><Play size={19} fill="currentColor" /></span>
        </Link>
        {showRank && <span className="rank-marker">{String(index + 1).padStart(2, '0')}</span>}
        <button className={`save-button ${saved ? 'saved' : ''}`} type="button" onClick={() => toggleSaved(item.id)} aria-label={saved ? `Remove ${item.title} from watchlist` : `Add ${item.title} to watchlist`} title={saved ? 'Remove from My List' : 'Add to My List'}>{saved ? <Check size={16} /> : <Plus size={17} />}</button>
        <span className="poster-type">{item.type === 'series' ? 'SERIES' : 'FILM'}</span>
      </div>
      <div className="movie-meta">
        <div className="movie-title-row"><Link to={`/title/${item.id}`} className="movie-title">{item.title}</Link><span className="movie-rating"><Star size={12} fill="currentColor" /> {item.rating.toFixed(1)}</span></div>
        <div className="movie-subline"><span>{item.year}</span><span className="meta-divider">·</span><span>{item.genres[0]}</span><span className="meta-divider">·</span><span>{item.duration}</span></div>
      </div>
    </article>
  );
}
