import { ArrowUpRight, Clapperboard, Drama, Ghost, Heart, Orbit, Puzzle, Rocket, Swords, WandSparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const genreIcons = { Action: Swords, Animation: WandSparkles, Comedy: Clapperboard, Crime: Puzzle, Drama, Fantasy: WandSparkles, History: Clapperboard, Horror: Ghost, Mystery: Puzzle, Romance: Heart, 'Sci-Fi': Orbit, Thriller: Rocket, Adventure: Rocket };
const genreColors = ['#c87e5b', '#8175c6', '#9b8e78', '#b5a16b', '#6d9ca7', '#bf718a'];

export default function GenreTile({ genre, index = 0, count = 0 }) {
  const Icon = genreIcons[genre] || Clapperboard;
  return <Link to={`/genres?genre=${encodeURIComponent(genre)}`} className="genre-tile" style={{ '--genre-color': genreColors[index % genreColors.length], '--genre-delay': `${index * 40}ms` }}><span className="genre-number">{String(index + 1).padStart(2, '0')}</span><span className="genre-icon"><Icon size={22} strokeWidth={1.6}/></span><span className="genre-label">{genre}</span><span className="genre-count">{count} titles</span><ArrowUpRight className="genre-arrow" size={16}/><span className="genre-ornament"/></Link>;
}
