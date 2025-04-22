import grid1 from "../../../../public/grid1.jpg";
import grid2 from "../../../../public/grid2.jpg";
import grid3 from "../../../../public/grid3.jpg";
import grid4 from "../../../../public/grid4.jpg";
import grid5 from "../../../../public/grid5.jpg";

export const PhotoGrid = () => {
  return (
    <div className="photo-grid">
      <div className="grid-item">
        <img src={grid1} alt="foto 1" />
      </div>
      <div className="grid-item">
        <img src={grid2} alt="foto 2" />
      </div>
      <div className="grid-item">
        <img src={grid3} alt="foto 3" />
      </div>
      <div className="grid-item portrait">
        <img src={grid4} alt="foto 4" />
      </div>
      <div className="grid-item">
        <img src={grid5} alt="foto 5" />
      </div>
      <div className="grid-item">
        <img src={grid1} alt="foto 1" />
      </div>
      <div className="grid-item">
        <img src={grid2} alt="foto 2" />
      </div>
      <div className="grid-item">
        <img src={grid3} alt="foto 3" />
      </div>
      <div className="grid-item">
        <img src={grid5} alt="foto 5" />
      </div>
      <div className="grid-item">
        <img src={grid1} alt="foto 1" />
      </div>
      <div className="grid-item">
        <img src={grid2} alt="foto 2" />
      </div>
      <div className="grid-item">
        <img src={grid3} alt="foto 3" />
      </div>
      <div className="grid-item">
        <img src={grid5} alt="foto 5" />
      </div>
    </div>
  );
};
