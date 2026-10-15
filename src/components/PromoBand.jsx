import { ArrowUpRight, Clapperboard, Compass, Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PromoBand() {
  return (
    <section className="promo-band">
      <div className="promo-orb promo-orb-one"/><div className="promo-orb promo-orb-two"/>
      <div className="promo-inner">
        <div className="promo-icon"><Compass size={23}/></div>
        <div className="promo-copy"><span className="promo-eyebrow">YOUR PERSONAL CINEMA CLUB</span><h3>Great stories find you here.</h3><p>From cult favourites to tomorrow’s classics, discover something that stays with you.</p></div>
        <Link to="/genres" className="promo-link">Find your next favourite <ArrowUpRight size={17}/></Link>
        <div className="promo-stamp"><Sparkles size={13}/> <span>MADE FOR<br/>MOVIE LOVERS</span></div>
      </div>
    </section>
  );
}
