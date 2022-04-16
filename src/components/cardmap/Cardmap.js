const Roadmap = ({ title, lists, label, type, badge }) => {
  return (
    <div className={`card-${type}`} badge-text={badge}>
      <div className={`card-header header-${type}`}>
        <h1>{title}</h1>
      </div>
      <div className="card-body">
        <p>
          <h2>{label}</h2>
        </p>
        <div className="card-element-hidden-basic">
          <ul className="card-element-container">
            {lists.map((item, i) => (
              <li key={i} className="card-element">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
