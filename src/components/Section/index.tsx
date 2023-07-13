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
      <p className="">{props.text}</p>
      <div className="">
        <a className="">{props.linkText}</a>
        <div
          className=""
          style={{
            bottom: "20%",
            width: "25%",
            height: "5px",
            backgroundColor: "yellow",
            zIndex: -10,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Section;
