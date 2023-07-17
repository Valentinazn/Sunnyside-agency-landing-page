import { IDb } from "../../type";

interface ITestimonials {
  data: IDb[];
}

const Testimonial = ({ data }: ITestimonials) => {
  return data.map((item) => {
    return (
      <div
        key={item.name}
        className="grid grid-cols-1  justify-self-center text-center gap-[58px] lg:w-[100%] w-[80%] max-w-[350px] min-w-[317px]"
      >
        <img
          className="w-[72px] h-[72px] rounded-[100%] justify-self-center"
          src={item.img}
          alt={item.name}
        />
        <p className="text-[18px] text-veryDarkGrayishBlue leading-[32px] tracking-[-0.129px]">
          {item.review}
        </p>
        <div className="grid grid-cols-1 justify-self-center text-center">
          <h4 className="text-[18px] font-fraunces font-black text-[#24303E] leading-[32px] tracking-[-0.129px] mb-[9px]">
            {item.name}
          </h4>
          <p className="text-grayishBlue font-[14px] leading-[25px] tracking-[-0.1px]">
            {item.job}
          </p>
        </div>
      </div>
    );
  });
};

export default Testimonial;
