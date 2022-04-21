import { useState } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const logo = "/assets/logo_germy.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="germ__navbar">
      <div className="germ__navbar-links">
        <div className="germ__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="germ__navbar-links_container">
          <p>
            <Link href="/">
              <a>Home</a>
            </Link>
          </p>
          <p>
            <Link href="/roadmap">
              <a>Roadmap</a>
            </Link>
          </p>
          <p>
            <Link href="/germies">
              <a>Germies</a>
            </Link>
          </p>
          <p>
            <Link href="/rangers">
              <a>Rangers</a>
            </Link>
          </p>
          <Link href="/news">
            <p>
              <a>News</a>
            </p>
          </Link>
        </div>
      </div>
      <div className="germ__navbar-sign">
        <a
          href="https://opensea.io/collection/germies"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button type="button">Opensea</button>
        </a>
      </div>
      <div className="germ__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#666"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#666"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="germ__navbar-menu_container scale-up-center">
            <div className="germ__navbar-menu_container-links">
              <p>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </p>
              <p>
                <Link href="/roadmap">
                  <a>Roadmap</a>
                </Link>
              </p>
              <Link href="/germies">
                <p>
                  <a>Germies</a>
                </p>
              </Link>
              <Link href="/rangers">
                <p>
                  <a>Rangers</a>
                </p>
              </Link>
              <Link href="/news">
                <p>
                  <a>News</a>
                </p>
              </Link>
            </div>
            <div className="germ__navbar-menu_container-links-sign">
              <a
                href="https://opensea.io/collection/germies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button">Opensea</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
