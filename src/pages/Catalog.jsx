import { useMemo, useState } from 'react';
import { ArrowDownWideNarrow, ChevronDown, RotateCcw, Search, SlidersHorizontal, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import MovieGrid from '../components/MovieGrid';
import { genres, movies, series, titles } from '../data/titles';

const catalogConfig = {
  movies: { eyebrow: 'THE FEATURE COLLECTION', title: 'Movies that move you.', description: 'Big-screen adventures, intimate character studies, and the unexpected gems in between.', list: movies, label: 'films' },
  series: { eyebrow: 'YOUR NEXT LONG STORY', title: 'Stay for one more episode.', description: 'Worlds worth getting lost in, characters worth rooting for, and finales worth talking about.', list: series, label: 'series' },
  all: { eyebrow: 'THE FULL COLLECTION', title: 'What are you in the mood for?', description: 'Explore the Cinewave library and let a good story find its way to you.', list: titles, label: 'titles' },
};

export default function Catalog({ kind = 'all' }) {
  const config = catalogConfig[kind] || catalogConfig.all;
  const [params, setParams] = useSearchParams();
  const initialGenre = params.get('genre') || 'All genres';
  const [genre, setGenre] = useState(initialGenre);
  const [sort, setSort] = useState(params.get('sort') || 'featured');
  const [year, setYear] = useState('Any year');
  const [rating, setRating] = useState('Any rating');
  const [query, setQuery] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const visible = useMemo(() => {
    let list = [...config.list];
    if (genre !== 'All genres') list = list.filter((item) => item.genres.includes(genre));
    if (year !== 'Any year') {
      const [min, max] = year.split('-').map(Number);
      list = list.filter((item) => item.year >= min && item.year <= max);
    }
    if (rating !== 'Any rating') list = list.filter((item) => item.rating >= Number(rating));
    if (query.trim()) {
      const needle = query.trim().toLowerCase();
      list = list.filter((item) => `${item.title} ${item.description} ${item.genres.join(' ')} ${item.year} ${item.director}`.toLowerCase().includes(needle));
    }
    if (sort === 'newest') list.sort((a, b) => b.year - a.year || b.rating - a.rating);
    else if (sort === 'oldest') list.sort((a, b) => a.year - b.year);
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (sort === 'title') list.sort((a, b) => a.title.localeCompare(b.title));
    else list.sort((a, b) => Number(Boolean(b.trending)) - Number(Boolean(a.trending)) || b.rating - a.rating);
    return list;
  }, [config.list, genre, year, rating, query, sort]);

  const resetFilters = () => { setGenre('All genres'); setYear('Any year'); setRating('Any rating'); setSort('featured'); setQuery(''); setParams({}); };
  const activeFilterCount = Number(genre !== 'All genres') + Number(year !== 'Any year') + Number(rating !== 'Any rating');
  const setGenreAndUrl = (value) => { setGenre(value); if (value === 'All genres') setParams((p) => { const next = new URLSearchParams(p); next.delete('genre'); return next; }); else setParams((p) => { const next = new URLSearchParams(p); next.set('genre', value); return next; }); };

  return (
    <main className="catalog-page page-shell">
      <div className="catalog-intro"><div className="catalog-intro-copy"><div className="eyebrow"><span className="eyebrow-line"/>{config.eyebrow}</div><h1>{config.title}</h1><p>{config.description}</p></div><div className="catalog-art"><span className="catalog-art-orbit"/><span className="catalog-art-disc"><span/><span/><span/></span><span className="catalog-art-label">EST. FOR<br/>THE STORY</span><span className="catalog-art-index">CW / 026</span></div></div>
      <div className="catalog-toolbar"><div className="catalog-result-count"><span className="result-count-num">{visible.length.toString().padStart(2, '0')}</span><span> {config.label} to discover</span></div><div className="catalog-toolbar-actions"><label className="catalog-search"><Search size={16}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a title..." aria-label="Search this catalogue"/>{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X size={13}/></button>}</label><button className={`filter-toggle ${filtersOpen ? 'filter-active' : ''}`} onClick={() => setFiltersOpen((open) => !open)} type="button"><SlidersHorizontal size={16}/> Filters {activeFilterCount > 0 && <span>{activeFilterCount}</span>}</button><label className="sort-select"><ArrowDownWideNarrow size={15}/><select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort titles"><option value="featured">Featured</option><option value="rating">Top rated</option><option value="newest">Newest first</option><option value="oldest">Oldest first</option><option value="title">Title A–Z</option></select><ChevronDown size={13}/></label></div></div>
      {filtersOpen && <div className="filter-panel"><div className="filter-field"><label htmlFor="genre-filter">Genre</label><select id="genre-filter" value={genre} onChange={(e) => setGenreAndUrl(e.target.value)}><option>All genres</option>{genres.map((item) => <option key={item}>{item}</option>)}</select></div><div className="filter-field"><label htmlFor="year-filter">Release year</label><select id="year-filter" value={year} onChange={(e) => setYear(e.target.value)}><option>Any year</option><option value="2020-2026">2020s</option><option value="2010-2019">2010s</option><option value="2000-2009">2000s</option><option value="1900-1999">Before 2000</option></select></div><div className="filter-field"><label htmlFor="rating-filter">Minimum rating</label><select id="rating-filter" value={rating} onChange={(e) => setRating(e.target.value)}><option>Any rating</option><option value="9">9.0 and up</option><option value="8">8.0 and up</option><option value="7">7.0 and up</option></select></div><button className="reset-filters" onClick={resetFilters} type="button"><RotateCcw size={14}/> Reset all</button></div>}
      <div className="catalog-active-filters">{genre !== 'All genres' && <button onClick={() => setGenreAndUrl('All genres')} type="button">{genre}<X size={13}/></button>}{year !== 'Any year' && <button onClick={() => setYear('Any year')} type="button">{year}<X size={13}/></button>}{rating !== 'Any rating' && <button onClick={() => setRating('Any rating')} type="button">Rating {rating}+<X size={13}/></button>}{query && <button onClick={() => setQuery('')} type="button">“{query}”<X size={13}/></button>}{(activeFilterCount > 0 || query) && <button className="clear-all" type="button" onClick={resetFilters}>Clear all</button>}</div>
      <MovieGrid items={visible} emptyTitle="No titles match those filters" emptyText="Try a different genre, rating, or search term." />
      <div className="catalog-bottom-note"><span className="catalog-note-mark">✳</span><span>You’ve reached the end of this collection.</span><span className="catalog-note-line"/></div>
    </main>
  );
}
