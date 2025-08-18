import { useState, useEffect } from "react";
import instagram from "/instagram.svg";
import { Link } from "react-router";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize(); // Ejecuta al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                <p
                  onClick={() => {
                    if (isMobile) setDropdownOpen((prev) => !prev);
                  }}
                >
                  DP
                </p>

                {!isMobile ? (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/gallery/shein">SHEIN</Link>
                    </li>
                    <li>
                      <Link to="/gallery/anillo-de-bodas">
                        Anillo de bodas (foto fija)
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery/mexico-pro-indigena">
                        México Pro Indígena
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery/este-aire-sabe-mi-nombre">
                        Este aire sabe mi nombre
                      </Link>
                    </li>
                  </ul>
                ) : (
                  dropdownOpen && (
                    <ul className="dropdown-mobile-menu">
                      <li>
                        <Link to="/gallery/shein">SHEIN</Link>
                      </li>
                      <li>
                        <Link to="/gallery/anillo-de-bodas">
                          Anillo de bodas (foto fija)
                        </Link>
                      </li>
                      <li>
                        <Link to="/gallery/mexico-pro-indigena">
                          México Pro Indígena
                        </Link>
                      </li>
                      <li>
                        <Link to="/gallery/este-aire-sabe-mi-nombre">
                          Este aire sabe mi nombre
                        </Link>
                      </li>
                    </ul>
                  )
                )}
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
