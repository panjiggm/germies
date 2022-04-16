import { CTA, Navbar } from "../../src/components";

const Bacteria = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>

      <CTA
        label="Bacteria Coming Soon!"
        title="We will update the Bacteria content as soon as possible"
        link="Back to Germies"
        path="/germies"
      />
    </div>
  );
};

export default Bacteria;
