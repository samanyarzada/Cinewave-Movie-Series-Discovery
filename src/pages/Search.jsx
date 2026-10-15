import { Search as SearchIcon, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieGrid from '../components/MovieGrid';
import { titles } from '../data/titles';

export default function Search() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const [draft, setDraft] = useState(query);
  useEffect(() => setDraft(query), [query]);
  const results = query.trim() ? titles.filter((item) => `${item.title} ${item.description} ${item.genres.join(' ')} ${item.year} ${item.director} ${item.cast.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())) : [];
  const submit = (event) => { event.preventDefault(); setParams(draft.trim() ? { q: draft.trim() } : {}); };
  const suggestions = ['Sci-Fi', 'Drama', '2024', 'Christopher Nolan'];
  return <main className="search-page page-shell"><div className="search-page-intro"><span className="search-big-icon"><SearchIcon size={25}/></span><div className="eyebrow"><span className="eyebrow-line"/>THE CINEWAVE FINDER</div><h1>Looking for <span>something?</span></h1><p>A name, a feeling, an actor you love. Let’s find the story.</p><form className="search-page-form" onSubmit={submit}><SearchIcon size={20}/><input autoFocus value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Try a title, genre, year, or director..." aria-label="Search all titles"/><button type="submit">Search <span>→</span></button></form><div className="search-suggestions"><span>TRY SEARCHING</span>{suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => { setDraft(suggestion); setParams({ q: suggestion }); }}>{suggestion}</button>)}</div></div>
    <section className="search-results"><div className="search-results-heading"><div><div className="eyebrow"><span className="eyebrow-line"/>{query ? 'MATCHES IN THE LIBRARY' : 'A LITTLE INSPIRATION'}</div><h2>{query ? <>Results for <span>“{query}”</span></> : 'Popular discoveries'}</h2></div>{query && <span className="search-results-count">{results.length} {results.length === 1 ? 'result' : 'results'}</span>}</div><MovieGrid items={query ? results : titles.filter((item) => item.trending).slice(0, 4)} emptyTitle="No stories found" emptyText="Try another title, genre, actor, director, or year."/></section>
    <div className="search-note"><Sparkles size={15}/> Search covers title names, synopsis, genres, directors, cast, and year.</div>
  </main>;
}
