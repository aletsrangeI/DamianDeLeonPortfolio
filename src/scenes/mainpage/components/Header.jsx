import instagram from "/instagram.svg";
import { Link } from "react-router";

export const Header = () => {
  return (
    <div className="header">
      <section className="header-content">
        <div className="grow1">
          <div className="name">
            <h1>Damian de Leon</h1>
          </div>
        </div>
        <div className="grow1"></div>
        <div className="grow1">
          <div className="menu">
            <ul>
              <li>
                <a href="#">
                  <p>Mi trabajo</p>
                </a>
              </li>
              <li>
                <Link to="/shop">
                  <p>Tienda</p>
                </Link>
              </li>
              <li>
                <a href="#">
                  <p>Acerca de mi</p>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dimitri_led/">
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
