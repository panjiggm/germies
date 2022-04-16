import { CTA, Navbar } from "../../src/components";

const Fungus = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>

      <CTA
        label="Fungus Coming Soon!"
        title="We will update the Fungus content as soon as possible"
        link="Back to Germies"
        path="/germies"
      />
    </div>
  );
};

export default Fungus;
