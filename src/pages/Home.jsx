import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';
import SectionHeading from '../components/SectionHeading';
import PromoBand from '../components/PromoBand';
import GenreTile from '../components/GenreTile';
import { movies, genres, titles } from '../data/titles';

export default function Home() {
  const featured = titles.find((item) => item.featured) || movies[0];
  const trending = titles.filter((item) => item.trending).slice(0, 6);
  const topRated = [...titles].sort((a, b) => b.rating - a.rating).slice(0, 6);
  const newReleases = [...movies].filter((item) => item.year >= 2022).sort((a, b) => b.year - a.year).slice(0, 5);
  const topGenres = ['Sci-Fi', 'Drama', 'Action', 'Mystery', 'Adventure', 'Comedy'];

  return (
    <main>
      <Hero item={featured} />
      <div className="home-page page-shell">
        <section className="content-section trending-section">
          <SectionHeading eyebrow="THE CULTURE RIGHT NOW" title="On everyone’s radar" description="The titles people keep coming back to." to="/movies" linkText="Explore catalogue" />
          <div className="movie-grid movie-grid-featured">{trending.map((item, index) => <MovieCard key={item.id} item={item} index={index} />)}</div>
        </section>
        <PromoBand />
        <section className="content-section fresh-section">
          <SectionHeading eyebrow="FRESH OFF THE REEL" title="Recently released" description="Newer stories, ready for your next movie night." to="/movies?sort=newest" />
          <div className="movie-grid">{newReleases.map((item, index) => <MovieCard key={item.id} item={item} index={index} />)}</div>
        </section>
        <section className="content-section genre-section-home">
          <SectionHeading eyebrow="FOLLOW YOUR CURIOSITY" title="Find your kind of story" description="Choose a mood. We’ll handle the opening credits." to="/genres" linkText="All genres" />
          <div className="genre-grid">{topGenres.map((genre, index) => <GenreTile key={genre} genre={genre} index={index} count={titles.filter((item) => item.genres.includes(genre)).length} />)}</div>
        </section>
        <section className="content-section top-picks-section">
          <SectionHeading eyebrow="THE CINEWAVE EDIT" title="A little more acclaimed" description="Standout stories chosen for their craft, heart, and staying power." to="/movies?sort=rating" />
          <div className="top-picks-layout">
            <div className="top-picks-feature" style={{ backgroundImage: `linear-gradient(90deg, rgba(13,16,20,.96) 0%, rgba(13,16,20,.76) 49%, rgba(13,16,20,.05) 100%), url(${topRated[0]?.backdrop}), url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=85)` }}>
              <div className="top-picks-feature-copy"><span className="top-picks-tag"><Sparkles size={12}/> EDITOR’S CHOICE</span><h3>{topRated[0]?.title}</h3><p>{topRated[0]?.description}</p><div className="top-picks-meta"><span>★ {topRated[0]?.rating.toFixed(1)}</span><span>{topRated[0]?.year}</span><span>{topRated[0]?.genres[0]}</span></div><Link to={`/title/${topRated[0]?.id}`} className="button-primary button-small"><Play size={14} fill="currentColor"/> Discover the film</Link></div>
            </div>
            <div className="top-picks-list">{topRated.slice(1, 5).map((item, index) => <Link to={`/title/${item.id}`} className="mini-pick" key={item.id}><span className="mini-pick-index">0{index + 2}</span><img src={item.poster} alt="" loading="lazy"/><span className="mini-pick-info"><strong>{item.title}</strong><small>{item.year} <span>·</span> {item.genres[0]}</small></span><span className="mini-pick-rating">★ {item.rating.toFixed(1)}</span><ArrowRight className="mini-pick-arrow" size={16}/></Link>)}</div>
          </div>
        </section>
        <section className="home-bottom-cta"><div className="cta-star">✳</div><div><span className="eyebrow">KEEP THE GOOD STORIES CLOSE</span><h2>Your watchlist, your next movie night.</h2><p>Save the titles you love and keep your next pick in one place.</p></div><Link to="/watchlist" className="button-secondary">Open my watchlist <ArrowRight size={15}/></Link></section>
      </div>
    </main>
  );
}
