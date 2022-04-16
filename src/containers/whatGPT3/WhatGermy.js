import Link from "next/link";

const flygerm = "/assets/bacteria12.png";

const WhatGermy = () => (
  <div className="germ__whatgerm section__margin" id="wgerm">
    <div className="germ__whatgerm-heading">
      <div>
        <h1 className="gradient__text">The origin of Germies</h1>
        <br />
        <h6>
          In the year 7077, there was a big asteroid disaster that caused
          genetic changes in small-scale creatures (microorganisms & germs),
          they were transformed into cat-sized. They also have unique abilities
          because they mutate with the environment around them. The power of
          natural elements, animals, or other unique abilities.
        </h6>
        <br />
        <Link href="/germies">
          <a>
            <p>Explore the Germies ➡️</p>
          </a>
        </Link>
        <br />
      </div>
      <img src={flygerm} height={300} />
    </div>
  </div>
);

export default WhatGermy;
