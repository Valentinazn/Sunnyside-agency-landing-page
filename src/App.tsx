import AboveTheFold from "./components/AboveTheFold";
import Section from "./components/Section";
import SectionImg from "./components/SectionImg";
import Arrow from "/images/icon-arrow-down.svg";
import Transform from "../public/images/desktop/image-transform.jpg";
import StandOut from "../public/images/desktop/image-stand-out.jpg";
import GraphicDesign from "../public/images/desktop/image-graphic-design.jpg";
import Photography from "../public/images/desktop/image-photography.jpg";
import { useEffect, useState } from "react";
import { IDb } from "./type";
import Testimonial from "./components/Testimonial";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IDb[]>();

  async function fetchData() {
    setLoading(false);
    try {
      const response = await fetch("db.json");
      const db = await response.json();
      if (db) {
        setData(db);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(true);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <AboveTheFold title={"We are creavites"} img={Arrow} />

      <div className=" grid grid-cols-1 sm:grid-cols-2 ">
        <div className=" grid  place-items-center p-8 sm:p-0">
          <Section
            title={"Transform your brand"}
            text={
              "We are a full-service creative agency specialing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
            }
            linkText={"Learn more"}
          />
        </div>

        <SectionImg img={Transform} />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 ">
        <div className="order-last sm:order-none">
          <SectionImg img={StandOut} />
        </div>

        <div className=" grid  place-items-center  p-8 sm:p-0">
          <Section
            title={"Transform your brand"}
            text={
              "We are a full-service creative agency specialing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
            }
            linkText={"Learn more"}
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 ">
        <SectionImg
          imgHeight="sm:h-full min-h-[600px]"
          color="text-darkDesaturatedCyan"
          img={GraphicDesign}
          title="Graphic Design"
          text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        />
        <SectionImg
          imgHeight="sm:h-full min-h-[600px]"
          title="Photography"
          color="text-darkBlue"
          img={Photography}
          text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        />
      </div>
      <div className="grid grid-cols-1 place-items-center lg:p-[165px] gap-[81px]">
        <h3 className="justify-self-center text-[20px] uppercase text-grayishBlue font-fraunces font-black ">
          Client Testimonials
        </h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px]">
          {loading && <Testimonial data={data ?? []} />}
        </div>
      </div>
    </>
  );
}

export default App;
