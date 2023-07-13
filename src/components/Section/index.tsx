interface ISection {
  title: string;
  text: string;
  linkText: string;
}

const Section = (props: ISection) => {
  return (
    <div className="grid grid-cols-1 place-content-center max-w-[300px] lg:max-w-[445px] h-full sm:text-left text-center gap-[24px]">
      <h2 className=" text-darkBlue lg:text-[40px] text-[32px] font-black font-fraunces">
        {props.title}
      </h2>
      <p className="text-grayishBlue font-[18px] tracking-[-0.129px] leading-[30px]">
        {props.text}
      </p>
      <div className="relative w-[137px] text-center justify-self-center sm:justify-self-start">
        <a className="text-veryDarkDesaturatedBlue uppercase font-fraunces font-black text-[15px] tracking-[1px]">
          {props.linkText}
        </a>
        <div
          className="absolute bg-yellow h-[10px] w-full top-[15px] rounded-[28px] opacity-25"
          style={{
            zIndex: -10,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Section;
