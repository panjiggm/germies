import { CTA, Navbar } from "../src/components";

const News = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>

      <CTA
        label="News Coming Soon!"
        title="We will update the news content as soon as possible"
        link="Back to Home"
        path="/"
      />
    </div>
  );
};

export default News;
