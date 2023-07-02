import AboveTheFold from "./components/AboveTheFold";
import Section from "./components/Section";
import SectionImg from "./components/SectionImg";
import Arrow from "/images/icon-arrow-down.svg";
import Transform from "../public/images/desktop/image-transform.jpg";

function App() {
  return (
    <div className="">
      <AboveTheFold title={"We are creavites"} img={Arrow} />

      <div className="">
        <Section
          title={"Transform your brand"}
          text={
            "We are a full-service creative agency specialing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          }
          linkText={"Learn more"}
        />
        <SectionImg img={Transform} imgText="" />
        <SectionImg img={Transform} imgText="" />
        <Section
          title={"Transform your brand"}
          text={
            "We are a full-service creative agency specialing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          }
          linkText={"Learn more..."}
        />
        <Section
          title={"Transform your brand"}
          text={
            "We are a full-service creative agency specialing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          }
          linkText={"Learn more..."}
        />

        <SectionImg img={Transform} imgText="" />
      </div>
    </div>
  );
}

export default App;
