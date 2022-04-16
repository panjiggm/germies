import { Article, Navbar } from "../../src/components";
import { Footer } from "../../src/containers";

const bacteria0 = "/assets/bacteria0.png";
const fungus0 = "/assets/fungus0.png";
const virus = "/assets/logo_germy_.png";
const parasite = "/assets/logo_germy_ 1.png";

const Germies = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="germ__blog section__padding" id="blog">
        <div className="germ__blog-heading">
          <h1 className="gradient__text">
            Each germies have different <br /> personalities and traits
          </h1>

          <p>
            There are 4 types of germies, Bacteria, Fungus, Virus and Parasite.
          </p>
        </div>
        <div className="germ__blog-container">
          <div className="germ__blog-container_groupB">
            <Article
              imgUrl={bacteria0}
              text="Bacteria"
              path="bacteria"
              date="Bacteria is the most common type of germies, bacteria consists of good and bad bacteria. they are the most friendly to the ranger, therefore bacteria are the most numerous. However, it is rather difficult to find a type of bacteria that has a strong ability, only certain rangers can get them."
            />
            <Article
              imgUrl={fungus0}
              text="Fungus"
              path="fungus"
              date="Fungus are a type of germies whose behavior is a little weird, they are very expressive creatures. apart from their weird behavior, their powers are also very strange and unique
              Fungus are quite difficult to work with, but once they trust you, they can make excellent partners in battle."
            />
            <Article
              imgUrl={virus}
              text="Virus"
              path="virus"
              date="Virus are a kind of bad germies, very few of which are good. they have a stronger ability, but the number is the least among other germs.
              Virus only wants to cooperate with a ranger who has bad intentions. sometimes, viruses also injure other germs to test their abilities or to steal something."
            />
            <Article
              imgUrl={parasite}
              text="Parasite"
              path="parasite"
              date="Parasites are kind of stray germies, they can be good or bad depending on who they are friends with, that's why they are so unstable.
              Parasites can absorb the strength of the opponent or the environment to increase their abilities, this is their special ability. but sadly, they are quite lazy creatures."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Germies;
