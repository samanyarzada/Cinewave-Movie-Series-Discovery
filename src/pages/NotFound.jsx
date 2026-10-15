import { ArrowLeft, Clapperboard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return <main className="not-found page-shell"><div className="not-found-art"><Clapperboard size={35}/></div><span className="not-found-code">404 / OUT OF FRAME</span><h1>This story took<br/><span>a different turn.</span></h1><p>The page you’re looking for isn’t in our current cut. Let’s get you back to the good stuff.</p><Link to="/" className="button-primary"><ArrowLeft size={15}/> Return home</Link></main>;
}
