export const Footer = () => {
  return (
    <div className="site-footer">
      <div className="contact-info">
        <a href="mailto:contacto@orionsys.net">contacto@orionsys.net</a>
        <a href="tel:+521234567890">+52 55 3554 8441</a>
        <a
          href="https://www.instagram.com/dimitri_led/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className="copyright">
        © {new Date().getFullYear()} OrionSys — Todos los derechos reservados.
      </div>
    </div>
  );
};
