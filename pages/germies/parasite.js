import { CTA, Navbar } from "../../src/components";

const Parasite = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>

      <CTA
        label="Parasite Coming Soon!"
        title="We will update the Parasite content as soon as possible"
        link="Back to Germies"
        path="/germies"
      />
    </div>
  );
};

export default Parasite;
