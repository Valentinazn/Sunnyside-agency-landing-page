interface ISection {
  title: string;
  text: string;
  linkText: string;
}

const Section = (props: ISection) => {
  return (
    <div className="">
      <div className="">
        <h2 className="">{props.title}</h2>
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
    </div>
  );
};

export default Section;
