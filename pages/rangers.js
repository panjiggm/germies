import { CTA, Navbar } from "../src/components";

const Rangers = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      {/* <div className="germ_ranger section__padding" id="rangers">
        <div className="germ__ranger-heading">
          <h1 className="gradient__text">
            Who are the Rangers? <br /> why do they have special powers?
          </h1>

          <p>We will update the content about the ranger as soon as possible</p>
        </div>
      </div> */}

      <CTA
        label="Coming Soon!"
        title="We will update the content about the Rangers as soon as possible"
        link="Back to Home"
        path="/"
      />
    </div>
  );
};

export default Rangers;
