import { instagram, facebook, twitter, rarity, discord } from "./imports";

const Brand = () => (
  <main className="germ__brand">
    <div className="grid">
      <div className="grid-item">
        <a
          href="https://www.instagram.com/germiesnft/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-soc1">
            <img src={instagram} height={20} />
            <p>Instagram</p>
          </button>
        </a>
      </div>
      <div className="grid-item">
        <a
          href="https://facebook.com/profile.php?id=100080377903429"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-soc2">
            <img src={facebook} height={20} />
            <p>Facebook</p>
          </button>
        </a>
      </div>
      <div className="grid-item">
        <a
          href="https://twitter.com/GermiesNFT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-soc3">
            <img src={twitter} height={20} />
            <p>Twitter</p>
          </button>
        </a>
      </div>
      <div className="grid-item">
        <button className="btn-soc4">
          <img src={rarity} height={20} />
          <p>Rarity</p>
        </button>
      </div>
    </div>
  </main>
);

export default Brand;
