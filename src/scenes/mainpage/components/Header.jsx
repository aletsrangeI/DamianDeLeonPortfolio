import instagram from "/instagram.svg";
import { Link } from "react-router";

export const Header = () => {
  return (
    <div className="header">
      <section className="header-content">
        <div className="grow1">
          <div className="name">
            <Link to="/">
              <h1>Dimitri de León</h1>
            </Link>
          </div>
        </div>
        <div className="grow1"></div>
        <div className="grow1">
          <div className="menu">
            <ul>
              <li className="dropdown">
                <Link>
                  <p>DP</p>
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link to="/gallery/shein">SHEIN</Link>
                  </li>
                  <li>
                    <Link to="/gallery/anillo-de-bodas">
                      Anillo de bodas (foto fija)
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/shop">
                  <p>Mi trabajo</p>
                </Link>
              </li>

              <li>
                <Link to="/about">
                  <p>Acerca de mi</p>
                </Link>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/dimitri_led/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
