import { CTA, Navbar } from "../../src/components";

const Virus = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>

      <CTA
        label="Virus Coming Soon!"
        title="We will update the Virus content as soon as possible"
        link="Back to Germies"
        path="/germies"
      />
    </div>
  );
};

export default Virus;
