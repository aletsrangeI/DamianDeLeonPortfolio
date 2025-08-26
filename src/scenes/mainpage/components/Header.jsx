import { useState, useEffect } from "react";
import instagram from "/instagram.svg";
import { Link } from "react-router";
import { galleries } from "../../../data/galleries"; // ajusta ruta si aplica

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize(); // Ejecuta al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Normaliza títulos con saltos de línea
  const items = galleries.map((g) => ({
    to: `/gallery/${g.id}`,
    label: (g.title || g.id).replace(/\n/g, " ").trim(),
    id: g.id,
  }));

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

                {/* Desktop: mantiene hover por CSS con .dropdown-menu */}
                {!isMobile ? (
                  <ul className="dropdown-menu">
                    {items.map((item) => (
                      <li key={item.id}>
                        <Link to={item.to}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  // Mobile: mismo estilo/clases originales
                  dropdownOpen && (
                    <ul className="dropdown-mobile-menu">
                      {items.map((item) => (
                        <li key={item.id}>
                          <Link
                            to={item.to}
                            onClick={() => setDropdownOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
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
