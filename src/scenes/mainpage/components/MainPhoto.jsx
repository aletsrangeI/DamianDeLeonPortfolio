import photomain from "../../../../public/photomain.jpg";

export const MainPhoto = () => {
  return (
    <div className="main-photo">
      <div className="image-container">
        <img src={photomain} alt="Descripción" />
        <div className="overlay-text"></div>
      </div>
    </div>
  );
};
