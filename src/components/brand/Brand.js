import { instagram, facebook, twitter, rarity, discord } from "./imports";

const Brand = () => (
  <div className="germ__brand section__padding">
    <div>
      <img src={instagram} height={35} />
    </div>
    <div>
      <img src={twitter} height={35} />
    </div>
    <div>
      <img src={facebook} height={35} />
    </div>
    <div>
      <img src={rarity} height={35} />
    </div>
  </div>
);

export default Brand;
