import AboveTheFold from "./components/AboveTheFold";
import Section from "./components/Section";
import SectionImg from "./components/SectionImg";
import Transform from "../public/images/desktop/image-transform.jpg";
import StandOut from "../public/images/desktop/image-stand-out.jpg";
import GraphicDesign from "../public/images/desktop/image-graphic-design.jpg";
import Photography from "../public/images/desktop/image-photography.jpg";
import { useEffect, useState } from "react";
import { IDb } from "./type";
import Testimonial from "./components/Testimonial";
import MilkBottles from "../public/images/desktop/image-gallery-milkbottles.jpg";
import Cone from "../public/images/desktop/image-gallery-cone.jpg";
import Orange from "../public/images/desktop/image-gallery-orange.jpg";
import SugarCubes from "../public/images/desktop/image-gallery-sugarcubes.jpg";
import Footer from "./components/Footer";

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

  return (
    <>
      <AboveTheFold title={"We are creavites"} />

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
      <div className="grid grid-cols-1 place-items-center lg:py-[165px] gap-[81px] max-w-screen-2xl mx-[auto] my-0 mt-[81px] lg:mt-0">
        <h3 className="justify-self-center text-[20px] uppercase text-grayishBlue font-fraunces font-black ">
          Client Testimonials
        </h3>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[30px] gap-[64px]">
          {loading && <Testimonial data={data ?? []} />}
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 lg:mt-0 mt-[132px]">
        <img src={MilkBottles} className="w-full object-cover" />
        <img src={Orange} className="w-full object-cover" />
        <img src={Cone} className="w-full object-fill" />
        <img src={SugarCubes} className="w-full object-cover" />
      </div>

      <Footer />
    </>
  );
}

export default App;
