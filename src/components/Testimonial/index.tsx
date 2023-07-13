import { IDb } from "../../type";

interface ITestimonials {
  data: IDb[];
}

const Testimonial = ({ data }: ITestimonials) => {
  return data.map((item) => {
    return (
      <div className="grid grid-cols-1 justify-self-center text-center gap-[58px]">
        <img
          className="w-[72px] h-[72px] rounded-[100%] justify-self-center"
          src={item.img}
          alt={item.name}
        />
        <p className="text-[18px] font-veryDarkGrayishBlue leading-[32px] tracking-[-0.129px]">
          {item.review}
        </p>
        <div className="grid grid-cols-1 justify-self-center text-center">
          <h4>{item.name}</h4>
          <p>{item.job}</p>
        </div>
      </div>
    );
  });
};

export default Testimonial;
