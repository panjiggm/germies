import Link from "next/link";

const rangers = "/assets/rangers.png";

const Possibility = () => (
  <div className="germ__possibility section__padding" id="possibility">
    <div className="germ__possibility-image">
      <img src={rangers} alt="possibility" />
    </div>
    <div className="germ__possibility-content">
      <h4>Meet the Rangers</h4>
      <h1 className="gradient__text">
        We are partners of Germies in adventure and fight
      </h1>
      <p>
        We are humans living on earth for thousands of years, one time we saw a
        strange phenomenon during the asteroid disaster. Various strange
        creatures appear and they can speak like human language, we call them
        Germies.
      </p>
      <Link href="/rangers">
        <a>
          <h4>Get closer with Rangers ➡️</h4>
        </a>
      </Link>
    </div>
  </div>
);

export default Possibility;
