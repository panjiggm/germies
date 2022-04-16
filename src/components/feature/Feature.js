const Feature = ({ title, text }) => (
  <div className="germ__features-container__feature">
    <div className="germ__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="germ__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
