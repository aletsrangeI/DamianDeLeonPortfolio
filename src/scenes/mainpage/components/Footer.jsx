import whatsappIcon from "../../../assets/whatsapp-brands-solid-full.svg";

export const Footer = () => {
  const whatsappNumber = "5215535548441"; // Número en formato internacional
  const message = "Hola, me interesa obtener más información."; // Mensaje precargado

  return (
    <div className="site-footer">
      <div className="contact-info">
        <a href="mailto:damiandx2009@hotmail.com">damiandx2009@hotmail.com</a>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            style={{ width: "20px", height: "20px" }}
          />
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
          )}`}
        >
          +52 55 3554 8441
        </a>
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
