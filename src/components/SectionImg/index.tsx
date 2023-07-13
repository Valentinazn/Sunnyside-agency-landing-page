interface ISection {
  img: string;
  text?: string;
  title?: string;
  color?: string;
  imgHeight?: string;
}

const SectionImg = (props: ISection) => {
  return (
    <div
      className={`relative text-center grid grid-cols-1 place-items-center ${props.color}`}
    >
      <img
        src={props.img}
        alt={props.title}
        className={`w-full ${props.imgHeight}`}
      />
      <div className="absolute bottom-[59px]  text-center max-w-[339px]">
        <h3 className="font-fraunces font-black text-[28px] tracking-tight mb-[27px]">
          {props.title}
        </h3>
        <p className="leading-7 tracking-[-0.114px] text-sm">{props.text}</p>
      </div>
    </div>
  );
};

export default SectionImg;
