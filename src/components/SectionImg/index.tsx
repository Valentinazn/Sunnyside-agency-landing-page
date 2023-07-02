interface ISection {
  img: string;
  imgText: string;
}

const SectionImg = (props: ISection) => {
  return (
    <div className="">
      <img src={props.img} alt={props.imgText} className="" />
    </div>
  );
};

export default SectionImg;
