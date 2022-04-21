import { instagram, facebook, twitter, rarity, discord } from "./imports";
import Link from "next/link";

const Brand = () => (
  <main className="germ__brand">
    <div className="grid">
      <div className="grid-item">
        <Link href="https://www.instagram.com/germiesnft/" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <button className="btn-soc1">
              <img src={instagram} height={20} alt="ig logo" />
              <p>Instagram</p>
            </button>
          </a>
        </Link>
      </div>
      <div className="grid-item">
        <Link
          href="https://facebook.com/profile.php?id=100080377903429"
          passHref
        >
          <a target="_blank" rel="noopener noreferrer">
            <button className="btn-soc2">
              <img src={facebook} height={20} alt="fb logo" />
              <p>Facebook</p>
            </button>
          </a>
        </Link>
      </div>
      <div className="grid-item">
        <Link href="https://twitter.com/GermiesNFT" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <button className="btn-soc3">
              <img src={twitter} height={20} alt="twitter logo" />
              <p>Twitter</p>
            </button>
          </a>
        </Link>
      </div>
      <div className="grid-item">
        <button className="btn-soc4">
          <img src={rarity} height={20} alt="rarity logo" />
          <p>Rarity</p>
        </button>
      </div>
    </div>
  </main>
);

export default Brand;
