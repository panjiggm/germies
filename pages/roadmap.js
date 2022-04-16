import { Navbar, Cardmap } from "../src/components";
import { Footer } from "../src/containers";

const Roadmap = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="germ_road section__padding" id="roadmap">
        <div className="germ__road-heading">
          <h1 className="gradient__text">
            By becoming a ranger <br /> you are ready to face strong enemies
          </h1>

          <p>
            This story begins when germies appear, humans become friends with
            germies and humans become rangers after receiving unique powers from
            germies.
          </p>
        </div>
        <div className="germ__road-container">
          <Cardmap
            title="Chapter 1"
            label="Drop Germies NFTs"
            type="basic"
            badge="On Going"
            lists={listChapter1}
          />
          <Cardmap
            title="Chapter 2"
            label="Introduce Germy Rangers"
            type="standard"
            badge="Not Started"
            lists={listChapter2}
          />
          <Cardmap
            title="Chapter 3"
            label="Rangers and Gerimies"
            type="premium"
            badge="Not Started"
            lists={listChapter3}
          />
          <Cardmap
            title="Chapter 4"
            label="Future →"
            type="pertalite"
            badge="Not Started"
            lists={listChapter4}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Roadmap;

const listChapter1 = [
  "100 unique Bacteria.",
  "100 unique Fungus.",
  "100 unique Virus.",
  "100 unique Parasite.",
];

const listChapter2 = [
  "Show 5 teams of Rangers.",
  "Rangers NFTs.",
  "Main team Rangers NFTs.",
];

const listChapter3 = ["Exclusive RangersXGermy NFTs.", "More++ Germies NFTs."];

const listChapter4 = [
  "Turn the stories of Germies and Rangers into Comics.",
  "Merchandise.",
];
