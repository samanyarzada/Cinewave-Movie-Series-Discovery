import { ArrowRight, MoveUpRight, Sparkles } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import GenreTile from '../components/GenreTile';
import MovieGrid from '../components/MovieGrid';
import SectionHeading from '../components/SectionHeading';
import { genres, titles } from '../data/titles';

export default function Genres() {
  const [params, setParams] = useSearchParams();
  const selected = params.get('genre') || '';
  const genreItems = selected ? titles.filter((item) => item.genres.includes(selected)) : [];
  const counts = genres.map((genre) => ({ genre, count: titles.filter((item) => item.genres.includes(genre)).length }));
  const featuredGenre = counts.reduce((best, item) => item.count > best.count ? item : best, counts[0]);
  return <main className="genres-page page-shell"><div className="genres-intro"><div className="eyebrow"><span className="eyebrow-line"/>A WORLD OF STORIES</div><h1>Every mood has<br/>a <span>movie.</span></h1><p>In the mood for a mind-bender? A little wonder? Something that makes you feel everything? Start here.</p><div className="genres-intro-foot"><Sparkles size={15}/><span>{genres.length} ways to find your next favourite</span></div><div className="genres-orbit"/><span className="genres-scribble">NO RULES.<br/>JUST STORIES.</span></div>
    <section className="genres-library"><SectionHeading eyebrow="BROWSE BY FEELING" title="Pick a genre, follow the feeling." description="Each category opens a different door. Which one are you walking through?"/><div className="genre-grid genres-page-grid">{counts.map(({ genre, count }, index) => <GenreTile key={genre} genre={genre} index={index} count={count}/>)}</div></section>
    {selected && <section className="genres-selection"><div className="selection-heading"><div><div className="eyebrow"><span className="eyebrow-line"/>YOUR GENRE, YOUR RULES</div><h2>{selected} <span>picks</span></h2></div><button className="clear-selection" onClick={() => setParams({})} type="button">Clear selection <MoveUpRight size={15}/></button></div><MovieGrid items={genreItems}/></section>}
    <section className="genre-spotlight"><div className="spotlight-number">01 <span>/ 0{counts.length}</span></div><div className="spotlight-content"><span className="spotlight-kicker">THE MOST EXPLORED GENRE</span><h2>{featuredGenre.genre}</h2><p>Stories in this category have a way of staying with you long after the credits. Follow a new perspective, an unexpected twist, or an unforgettable journey.</p><Link className="spotlight-link" to={`/genres?genre=${encodeURIComponent(featuredGenre.genre)}`}>Explore {featuredGenre.genre.toLowerCase()} <ArrowRight size={15}/></Link></div><div className="spotlight-art"><span className="spotlight-art-circle"/><span className="spotlight-art-center"><Sparkles size={42}/></span><span className="spotlight-art-label">CINEWAVE<br/>GENRE STUDY</span></div></section>
  </main>;
}
