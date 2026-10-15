import { ArrowLeft, ArrowRight, Check, Clock3, Play, Plus, Share2, Star, Ticket, Users } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import SectionHeading from '../components/SectionHeading';
import { getSimilarTitles, getTitle } from '../data/titles';
import { useWatchlist } from '../context/WatchlistContext';

export default function Details() {
  const { id } = useParams();
  const item = getTitle(id);
  const navigate = useNavigate();
  const { isSaved, toggleSaved } = useWatchlist();
  if (!item) return <main className="not-found page-shell"><span className="not-found-code">404</span><h1>That title is off the reel.</h1><p>We couldn’t find the story you were looking for.</p><Link to="/movies" className="button-primary">Back to catalogue <ArrowRight size={15}/></Link></main>;
  const saved = isSaved(item.id);
  const similar = getSimilarTitles(item);
  const shareTitle = async () => {
    try {
      if (navigator.share) await navigator.share({ title: item.title, text: `Discover ${item.title} on Cinewave`, url: window.location.href });
      else if (navigator.clipboard) { await navigator.clipboard.writeText(window.location.href); window.alert('Title link copied to clipboard.'); }
    } catch { /* share dismissed */ }
  };
  return <main className="details-page">
    <section className="details-hero" style={{ '--title-accent': item.accent || '#a0a5ac' }}><div className="details-backdrop" style={{ backgroundImage: `url("${item.backdrop}"), url("${item.poster}"), url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=85")` }}/><div className="details-hero-overlay"/><div className="details-topline page-shell"><button className="back-button" type="button" onClick={() => navigate(-1)}><ArrowLeft size={15}/> Go back</button><span className="details-collection-label">CINEWAVE / TITLE NO. {String(item.id.length * 7).padStart(3, '0')}</span></div><div className="details-main page-shell"><div className="details-poster-frame"><img src={item.poster} alt={`${item.title} poster`} onError={(event) => { event.currentTarget.style.opacity = '0'; event.currentTarget.parentElement.classList.add('image-failed'); }}/><span className="poster-fallback" aria-hidden="true">{item.title}</span><span className="details-poster-tag">{item.type === 'series' ? 'SERIES' : 'FEATURE FILM'}</span></div><div className="details-copy"><div className="eyebrow"><span className="eyebrow-line"/>{item.type === 'series' ? 'A CINEWAVE SERIES PICK' : 'A CINEWAVE FILM PICK'}</div><h1>{item.title}</h1><div className="details-facts"><span className="details-rating"><Star size={15} fill="currentColor"/> {item.rating.toFixed(1)} <small>/ 10</small></span><span>{item.year}</span><span className="details-dot"/><span>{item.duration}</span><span className="details-dot"/><span className="maturity-tag">{item.maturity}</span></div><div className="details-genres">{item.genres.map((genre) => <Link key={genre} to={`/genres?genre=${encodeURIComponent(genre)}`}>{genre}</Link>)}</div><p className="details-description">{item.description}</p><div className="details-cta-row"><Link to={`/watch/${item.id}`} className="button-primary"><Play size={17} fill="currentColor"/> Watch preview</Link><button className={`button-secondary ${saved ? 'is-saved' : ''}`} type="button" onClick={() => toggleSaved(item.id)}>{saved ? <Check size={16}/> : <Plus size={17}/>} {saved ? 'Saved to My List' : 'Add to My List'}</button><button className="details-share" type="button" onClick={shareTitle} aria-label="Share title"><Share2 size={17}/></button></div><div className="details-credit-row"><div className="credit-icon"><Ticket size={17}/></div><div><span>DIRECTED / CREATED BY</span><strong>{item.director}</strong></div></div></div></div><div className="details-hero-bottom page-shell"><span>CURATED STORY NO. {item.year}</span><span className="details-bottom-line"/><span>THE CINEWAVE COLLECTION</span></div></section>
    <div className="details-body page-shell"><section className="details-info-grid"><div className="details-info-main"><SectionHeading eyebrow="A CLOSER LOOK" title="The story behind the story."/><p className="details-long-copy">{item.description} {item.type === 'series' ? 'Across its episodes, every decision reveals another layer of this world, inviting viewers to connect the details and discover the human stories behind the spectacle.' : 'Every frame is built to be experienced, giving the characters room to surprise you and the story space to stay with you after the credits roll.'}</p></div><aside className="details-info-side"><div className="info-line"><span><Clock3 size={15}/> FORMAT</span><strong>{item.duration}</strong></div><div className="info-line"><span><Star size={15}/> CINEWAVE SCORE</span><strong>{item.rating.toFixed(1)} <small>/ 10</small></strong></div><div className="info-line"><span><Users size={15}/> STARRING</span><strong>{item.cast.slice(0, 4).join(', ')}</strong></div><div className="info-line"><span><Ticket size={15}/> CLASSIFICATION</span><strong>{item.maturity}</strong></div></aside></section>
      <section className="content-section similar-section"><SectionHeading eyebrow="KEEP EXPLORING" title="Stories with a similar feel." description="A few more titles you might find yourself thinking about." to="/movies"/><div className="movie-grid">{similar.map((entry, index) => <MovieCard key={entry.id} item={entry} index={index}/>)}</div></section>
    </div>
  </main>;
}
