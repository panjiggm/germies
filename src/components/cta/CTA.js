import Link from "next/link";

const CTA = ({ label, title, link, path }) => (
  <div className="germ__cta">
    <div className="germ__cta-content">
      <p>{label}</p>
      <h3>{title}</h3>
    </div>
    <div className="germ__cta-btn">
      <Link href={path}>
        <a>
          <button type="button">{link}</button>
        </a>
      </Link>
    </div>
  </div>
);

export default CTA;
