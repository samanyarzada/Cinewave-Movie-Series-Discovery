import { ArrowUpRight, Camera, CodeXml, Play, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-col">
          <Brand />
          <p>Your next favourite story is<br />closer than you think.</p>
          <div className="social-links"><a href="https://github.com" aria-label="GitHub" target="_blank" rel="noreferrer"><CodeXml size={17}/></a><a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer"><Camera size={17}/></a><a href="mailto:hello@cinewave.demo" aria-label="Email Cinewave"><Send size={16}/></a></div>
        </div>
        <div className="footer-column"><h4>Explore</h4><Link to="/movies">Movies</Link><Link to="/series">TV Series</Link><Link to="/genres">Browse Genres</Link><Link to="/watchlist">My Watchlist</Link></div>
        <div className="footer-column"><h4>Cinewave</h4><Link to="/about">About Us</Link><a href="https://github.com" target="_blank" rel="noreferrer">GitHub project <ArrowUpRight size={13}/></a><Link to="/about#faq">Help & FAQ</Link></div>
        <div className="footer-newsletter"><div className="newsletter-icon"><Play size={15} fill="currentColor" /></div><h4>Stories worth staying in for.</h4><p>A little inspiration for your next movie night.</p><Link to="/movies" className="text-link">Find your next watch <span>→</span></Link></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Cinewave Studio. Made for the love of cinema.</span><span className="footer-legal"><span>Demo experience</span><span className="legal-dot">·</span><span>Not affiliated with any streaming service</span></span></div>
    </footer>
  );
}
