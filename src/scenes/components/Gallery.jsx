import { galleries } from "../../data/galleries";
import { useParams } from "react-router";
import { PhotoSection } from "../mainpage/components";
import { useState } from "react";

export const Gallery = () => {
  const { id } = useParams();

  const gallery = galleries.find((g) => g.id === id);

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  if (!gallery) {
    return <p>Galería no encontrada</p>;
  }

  const openLightbox = (index) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage(
      (prev) => (prev - 1 + gallery.images.length) % gallery.images.length
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % gallery.images.length);
  };

  return (
    <div className="main">
      <PhotoSection title={gallery.title} />
      <div className="photo-grid">
        {gallery.images.map((img, index) => {
          const isString = typeof img === "string";
          const filename = isString ? img : img.filename;
          const imageClass = isString ? "" : img.className || "";
          const containerClass = `grid-item ${imageClass}`;

          return (
            <div
              className={containerClass}
              key={index}
              onClick={() => openLightbox(index)}
            >
              <img
                src={`${gallery.path}${filename}`}
                alt={`${gallery.title} ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
      {isOpen && (
        <div className="lightbox-overlay" onClick={() => setIsOpen(false)}>
          <button
            className="lightbox-button left"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage(
                (prev) =>
                  (prev - 1 + gallery.images.length) % gallery.images.length
              );
            }}
          >
            <span className="material-icons">arrow_back_ios</span>
          </button>

          <img
            src={`${gallery.path}${gallery.images[currentImage].filename}`}
            alt={`Imagen ${currentImage + 1}`}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()} // para que no se cierre al dar click en la imagen
          />

          <button
            className="lightbox-button right"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentImage((prev) => (prev + 1) % gallery.images.length);
            }}
          >
            <span className="material-icons">arrow_forward_ios</span>
          </button>
        </div>
      )}
    </div>
  );
};
