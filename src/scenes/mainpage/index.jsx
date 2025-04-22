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
      <Header />
      <div className="main">
        <MainPhoto />
        <PhotoSection title="Ensayo fotografico No. 1" />
        <PhotoGrid />
      </div>
      <Footer />
    </section>
  );
};
