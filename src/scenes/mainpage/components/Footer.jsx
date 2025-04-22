export const Footer = () => {
  return (
    <div className="site-footer">
      <div className="contact-info">
        <a href="mailto:tuemail@example.com">tuemail@example.com</a>
        <a href="tel:+521234567890">+52 123 456 7890</a>
        <a
          href="https://www.instagram.com/tuusuario"
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
