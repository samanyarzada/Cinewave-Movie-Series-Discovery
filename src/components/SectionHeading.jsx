import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SectionHeading({ eyebrow, title, description, to, linkText = 'View all', centered = false }) {
  return (
    <div className={`section-heading ${centered ? 'centered' : ''}`}>
      <div className="section-heading-copy">
        {eyebrow && <div className="eyebrow"><span className="eyebrow-line" />{eyebrow}</div>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {to && <Link to={to} className="section-link">{linkText}<ArrowRight size={15} /></Link>}
    </div>
  );
}
