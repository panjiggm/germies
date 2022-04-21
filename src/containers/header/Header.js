const people = "/assets/people.png";
const ai = "/assets/hero.png";

const Header = () => (
  <div className="germ__header section__padding" id="home">
    <div className="germ__header-content">
      <h1 className="gradient__text title_hero">
        The Story of Germy Rangers and The Germies
      </h1>
      <p>
        Germies are a unique collection of NFTs that represent types of germs
        (bacteria, fungi, viruses, parasites) that underwent a strange
        evolution, they have powers and can communicate with humans. Running on
        the Ethereum Blockchain, each germies has its own character and
        attributes.
      </p>

      <div className="germ__header-content__input">
        <a href="https://opensea.io/collection/germies" target="_blank">
          <button type="button">Opensea</button>
        </a>
      </div>

      {/* <div className="germ__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="germ__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
