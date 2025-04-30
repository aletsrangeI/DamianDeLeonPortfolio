import "../../App.css";
import {
  Footer,
  Header,
  MainPhoto,
  PhotoGrid,
  PhotoSection,
} from "./components";

export const MainPage = () => {
  return (
    <section className="layout">
      <div className="main">
        <MainPhoto />
      </div>
    </section>
  );
};
