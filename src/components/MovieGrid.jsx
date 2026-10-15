import { Clapperboard } from 'lucide-react';
import MovieCard from './MovieCard';

export default function MovieGrid({ items, emptyTitle = 'Nothing found just yet', emptyText = 'Try adjusting your filters or search for another title.' }) {
  if (!items.length) return <div className="empty-state"><span className="empty-state-icon"><Clapperboard size={26}/></span><h3>{emptyTitle}</h3><p>{emptyText}</p></div>;
  return <div className="movie-grid">{items.map((item, index) => <MovieCard key={item.id} item={item} index={index} />)}</div>;
}
