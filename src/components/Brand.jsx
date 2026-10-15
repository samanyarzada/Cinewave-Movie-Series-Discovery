import { Clapperboard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Brand({ onClick }) {
  return (
    <Link className="brand" to="/" aria-label="Cinewave home" onClick={onClick}>
      <span className="brand-mark"><Clapperboard size={19} strokeWidth={2.2} /></span>
      <span className="brand-word">cine<span>wave</span><i>.</i></span>
    </Link>
  );
}
