import { useEffect, useState } from "react";
import photomain from "../../../../public/photomain.webp";
import photomainPortrait from "../../../../public/photoMainPortrait.webp";

export const MainPhoto = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize(); // Ejecuta al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-photo">
      <div className="image-container">
        <img src={isMobile ? photomainPortrait : photomain} alt="Descripción" />
        <div className="overlay-text"></div>
      </div>
    </div>
  );
};
